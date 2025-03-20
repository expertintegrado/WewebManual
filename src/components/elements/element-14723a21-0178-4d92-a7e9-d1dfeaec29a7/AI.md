---
name: ww-dropdown
description: The `ww-dropdown` component provides a customizable dropdown menu that can be triggered by click, hover, or right-click, with configurable positions, alignments, and optional animations, allowing for flexible integration into web applications.
keywords:
  - triggertype
  - position
  - alignment
  - offsetx
  - offsety
  - dropdownzindex
  - disabled
  - animated
  - forcedisplayeditor
  - closedropdown
  - ww-layout
---

#### ww-dropdown

Component Purpose: Renders a dropdown menu triggered by click, hover, or right-click with configurable positions and alignments.

Properties:
- triggerType: 'click' | 'hover' | 'right-click' - Trigger type for opening. Default: "click"
- position: 'top' | 'right' | 'bottom' | 'left' - Position relative to trigger. Default: "bottom"
- alignment: 'start' | 'center' | 'end' - Alignment along position axis. Default: "start"
- offsetX: string - Horizontal offset in px or %. Default: undefined
- offsetY: string - Vertical offset in px or %. Default: undefined
- dropdownZIndex: number - Z-index of dropdown (0-100). Default: undefined
- disabled: boolean - Disables dropdown. Default: undefined
- animated: boolean - Enables animations. Default: undefined
- forceDisplayEditor: boolean - Forces display in editor. Default: undefined
- triggerLayout: Array - Hidden property for trigger element layout. Default: []
- dropdownLayout: Array - Hidden property for dropdown content layout. Default: []

Properties Details:
- offsetX and offsetY support binding with string values (px or %)
- dropdownZIndex is responsive, supports states and classes, and can be bound to a number
- alignment changes icon options based on position (horizontal/vertical alignment icons)
- disabled and animated properties can be bound to boolean values

Actions:
- closeDropdown: Programmatically closes the dropdown

Example:

{"uid":"dropdown-element","tag":"ww-dropdown","props":{"default":{"offsetY":"8px","position":"bottom","alignment":"start","triggerType":"click","forceDisplayEditor":true}},"children":{"triggerLayout":[{"uid":"dropdown-trigger-layout"}],"dropdownLayout":[{"uid":"dropdown-layout"}]}}
{"uid":"dropdown-trigger-layout","tag":"ww-button","props":{"default":{"disabled":false,"text":{"en":"<div>Click me</div>"}}},"styles":{"default":{"height":"38px","padding":"8px 16px","backgroundColor":"#000000","color":"#FFFFFF"}}}
{"uid":"dropdown-layout","tag":"ww-div","styles":{"default":{"width":"220px","padding":"8px","borderRadius":"12px"}},"children":{"children":[{"uid":"dropdown-layout-children"}]}}
{"uid":"dropdown-layout-children","tag":"ww-div","children":{"children":[{"uid":"layout-children-icon"},{"uid":"layout-children-text"}]}}
{"uid":"layout-children-icon","tag":"ww-icon","props":{"default":{"icon":"icon-user","fontSize":"16","color":"black"}}}
{"uid":"layout-children-text","tag":"ww-text","props":{"default":{"text":{"en":"<div>Profile</div>"}}}}

Events: none

Variables: none