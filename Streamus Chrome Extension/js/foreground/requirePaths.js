var require = {
    baseUrl: '../js/',
    paths: {
        //  Global:
        'helpers': 'helpers',
        'programState': 'programState',
        'youTubePlayerApi': 'youTubePlayerApi',
        'youTubeDataAPI': 'youTubeDataAPI',
        
        //  Enum:
        'dataSource': 'enum/dataSource',
        'playerState': 'enum/playerState',
        'repeatButtonState': 'enum/repeatButtonState',

        //  Third Party:
        'backbone': 'thirdParty/backbone',
        'jquery': 'thirdParty/jquery',
        'jqueryUi': 'thirdParty/jqueryUi',
        'levenshtein': 'thirdParty/levenshtein',
        'scrollIntoView': 'thirdParty/jquery.scrollIntoView',
        'sly': 'thirdParty/sly',
        'spin': 'thirdParty/jquery.spin',
        'underscore': 'thirdParty/underscore',

        //  Foreground:
        'main': 'foreground/main',
        'foreground': 'foreground/foreground',
        'backgroundManager': 'foreground/backgroundManager',
        'settingsManager': 'foreground/settingsManager',
        'player': 'foreground/player',
        
        'contentHeader': 'foreground/contentHeader',
        'dialogs': 'foreground/dialogs',
        'contentButtons': 'foreground/contentButtons',

        //  Collection:
        'contextMenuGroups': 'foreground/collection/contextMenuGroups',
        'contextMenuItems': 'foreground/collection/contextMenuItems',
        'streamItems': 'foreground/collection/streamItems',

        //  Model:
        'contextMenu': 'foreground/model/contextMenu',
        'contextMenuGroup': 'foreground/model/contextMenuGroup',
        'contextMenuItem': 'foreground/model/contextMenuItem',
        'spinnerBuilder': 'foreground/model/spinnerBuilder',
        
        //  View:
        'contextMenuView': 'foreground/view/contextMenuView',
        'headerTitleView': 'foreground/view/headerTitleView',
        'progressBarView': 'foreground/view/progressBarView',
        'volumeControlView': 'foreground/view/volumeControlView',
        
        //  View -> Buttons:
        'nextButtonView': 'foreground/view/buttons/nextButtonView',
        'playPauseButtonView': 'foreground/view/buttons/playPauseButtonView',
        'previousButtonView': 'foreground/view/buttons/previousButtonView',
        'radioButtonView': 'foreground/view/buttons/radioButtonView',
        'repeatButtonView': 'foreground/view/buttons/repeatButtonView',
        'shuffleButtonView': 'foreground/view/buttons/shuffleButtonView',
        
        //  View -> PlaylistItemsTab:
        'playlistItemInput': 'foreground/view/playlistItemsTab/playlistItemInput',
        'playlistItemsView': 'foreground/view/playlistItemsTab/playlistItemsView',
        'playlistItemView': 'foreground/view/playlistItemsTab/playlistItemView',

        //  View -> PlaylistsTab:
        'playlistInput': 'foreground/view/playlistsTab/playlistInput',
        'playlistsView': 'foreground/view/playlistsTab/playlistsView',
        'playlistView': 'foreground/view/playlistsTab/playlistView',
        
        //  View -> Stream:
        'streamItemView': 'foreground/view/stream/streamItemView',
        'streamView': 'foreground/view/stream/streamView',
        
        //  View -> Video:
        'videoDisplayView': 'foreground/view/video/videoDisplayView'
    }
};