import { LobeChatPlugin } from '@lobehub/chat-plugin-sdk';
import { produce } from 'immer';

import { PluginManifestMap } from '@/types/plugin';

type AddManifestDispatch = { id: string; plugin: LobeChatPlugin; type: 'addManifest' };
type DeleteManifestDispatch = { id: string; type: 'deleteManifest' };
// type UpdateManifestDispatch = {
//   id: string;
//   plugin: LobeChatPlugin;
//   type: 'updateManifest';
//   version: string;
// };

export type PluginDispatch = AddManifestDispatch | DeleteManifestDispatch;
// | UpdateManifestDispatch;

export const pluginManifestReducer = (
  state: PluginManifestMap,
  payload: PluginDispatch,
): PluginManifestMap => {
  switch (payload.type) {
    case 'addManifest': {
      return produce(state, (draftState) => {
        draftState[payload.id] = payload.plugin;
      });
    }

    case 'deleteManifest': {
      return produce(state, (draftState) => {
        delete draftState[payload.id];
      });
    }
    // case 'updateManifest'
  }
};
