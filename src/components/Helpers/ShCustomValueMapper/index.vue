<template functional>
  <label class="ShCustomValueMapper"
    :style="{ color: props.map[props.prop] ? props.map[props.prop].color : props.map['default'].color,
      cursor: props.cursor || 'default'
    }"
  >
  <i :class="`fa ${props.map[props.prop] ? props.map[props.prop].icon : props.map['default'].icon }`" />
  {{ props.map[props.prop] ? props.map[props.prop].label : props.map['default'].label }}
  </label>
</template>
