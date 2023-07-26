import { ActionIcon, Avatar, List } from '@lobehub/ui';
import { useHover } from 'ahooks';
import { Popconfirm, Tag } from 'antd';
import { X } from 'lucide-react';
import { FC, memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { agentSelectors, chatSelectors, sessionSelectors, useSessionStore } from '@/store/session';
import { useSettings } from '@/store/settings';

import { useStyles } from './style';

const { Item } = List;

interface SessionItemProps {
  active: boolean;
  id: string;
  loading: boolean;
}

const SessionItem: FC<SessionItemProps> = memo(({ id, active = true, loading }) => {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  const { t } = useTranslation('common');
  const { styles, theme, cx } = useStyles();
  const [defaultModel] = useSettings((s) => [s.settings.model], shallow);

  const [
    title,
    description,
    systemRole,
    avatar,
    avatarBackground,
    updateAt,
    model,
    chatLength,
    removeSession,
  ] = useSessionStore((s) => {
    const session = sessionSelectors.getSessionById(id)(s);
    const meta = session.meta;
    const systemRole = session.config.systemRole;
    return [
      agentSelectors.getTitle(meta),
      meta.description,
      systemRole,
      agentSelectors.getAvatar(meta),
      meta.backgroundColor,
      session?.updateAt,
      session.config.model,
      chatSelectors.currentChats(s).length,
      s.removeSession,
    ];
  }, shallow);

  const showModel = model !== defaultModel;
  const showChatLength = chatLength > 0;

  return (
    <div ref={ref}>
      <Flexbox className={styles.container} style={{ position: 'relative' }}>
        <Item
          active={active}
          avatar={
            <Avatar
              animation={isHovering}
              avatar={avatar}
              background={avatarBackground}
              shape="circle"
              size={46}
              title={title}
            />
          }
          classNames={{ time: cx('session-time', styles.time) }}
          date={updateAt}
          description={
            <Flexbox gap={4}>
              <Flexbox>{description || systemRole}</Flexbox>

              {!(showModel || showChatLength) ? undefined : (
                <Flexbox horizontal>
                  {showModel && (
                    <Tag bordered={false} style={{ color: theme.colorTextSecondary }}>
                      {model}
                    </Tag>
                  )}
                  {/*{showChatLength && (*/}
                  {/*  <Tag*/}
                  {/*    bordered={false}*/}
                  {/*    style={{ color: theme.colorTextSecondary, display: 'flex', gap: 4 }}*/}
                  {/*  >*/}
                  {/*    <Icon icon={LucideMessageCircle} />*/}
                  {/*    {chatLength}*/}
                  {/*  </Tag>*/}
                  {/*)}*/}
                </Flexbox>
              )}
            </Flexbox>
          }
          loading={loading}
          style={{ color: theme.colorText }}
          title={title}
        />
        <Popconfirm
          arrow={false}
          cancelText={t('cancel')}
          okButtonProps={{ danger: true }}
          okText={t('ok')}
          onConfirm={(e) => {
            e?.stopPropagation();
            removeSession(id);
          }}
          overlayStyle={{ width: 280 }}
          title={t('confirmRemoveSessionItemAlert')}
        >
          <ActionIcon
            className="session-remove"
            icon={X}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            size={'small'}
          />
        </Popconfirm>
      </Flexbox>
    </div>
  );
}, shallow);

export default SessionItem;
