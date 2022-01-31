import icLayers from "@iconify/icons-ic/twotone-layers";
import icAssigment from "@iconify/icons-ic/twotone-assignment";
import icContactSupport from "@iconify/icons-ic/twotone-contact-support";
import icDateRange from "@iconify/icons-ic/twotone-date-range";
import icChat from "@iconify/icons-ic/twotone-chat";
import icContacts from "@iconify/icons-ic/twotone-contacts";
import icAssessment from "@iconify/icons-ic/twotone-assessment";
import icLock from "@iconify/icons-ic/twotone-lock";
import icWatchLater from "@iconify/icons-ic/twotone-watch-later";
import icError from "@iconify/icons-ic/twotone-error";
import icAttachMoney from "@iconify/icons-ic/twotone-attach-money";
import icPersonOutline from "@iconify/icons-ic/twotone-person-outline";
import icReceipt from "@iconify/icons-ic/twotone-receipt";
import icHelp from "@iconify/icons-ic/twotone-help";
import icBook from "@iconify/icons-ic/twotone-book";
import icBubbleChart from "@iconify/icons-ic/twotone-bubble-chart";
import icFormatColorText from "@iconify/icons-ic/twotone-format-color-text";
import icStar from "@iconify/icons-ic/twotone-star";
import icViewCompact from "@iconify/icons-ic/twotone-view-compact";
import icPictureInPicture from "@iconify/icons-ic/twotone-picture-in-picture";
import icSettings from "@iconify/icons-ic/twotone-settings";
import icUpdate from "@iconify/icons-ic/twotone-update";
import icChromeReaderMode from "@iconify/icons-ic/twotone-chrome-reader-mode";
import icMail from "@iconify/icons-ic/twotone-mail";

export const MENU = [
  {
    type: 'link',
    label: 'Dashboard',
    route: '/',
    icon: icLayers,
    routerLinkActiveOptions: { exact: true }
  },
  {
    type: 'subheading',
    label: 'Angular',
    children: [
      {
        type: 'dropdown',
        label: 'Angular',
        icon: icBubbleChart,
        children: [
          {
            type: 'link',
            label: 'All',
            route: '/angular/all'
          },
        ]
      },
    ]
  },
  {
    type: 'subheading',
    label: 'Dotnet',
    children: [
      {
        type: 'dropdown',
        label: 'Snippets',
        icon: icBubbleChart,
        children: [
          {
            type: 'link',
            label: 'All',
            route: '/ui/components/overview'
          },
        ]
      },
    ]
  },
  {
    type: 'subheading',
    label: 'UI Elements',
    children: [
      {
        type: 'dropdown',
        label: 'Components',
        icon: icBubbleChart,
        children: [
          {
            type: 'link',
            label: 'Overview',
            route: '/ui/components/overview'
          },
        ]
      },
    ]
  },

  {
    type: 'subheading',
    label: 'Customize',
    children: []
  }
];
