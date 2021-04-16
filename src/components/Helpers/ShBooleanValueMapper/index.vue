<template functional>
  <label class="ShBooleanValueMapper"
    :style="{ color: (props.value !== undefined ? props.value : true) ?
                     (props.asTrue ? (props.asTrue.color || 'green') : 'green')
                   : (props.asFalse ? (props.asFalse.color || 'red') : 'red'),
              cursor: props.cursor || 'default'      }"
  >
    <i
      :class="`fa ${(props.value !== undefined ? props.value : true) ?
                    (props.asTrue ? (props.asTrue.icon || 'fa-check') : 'fa-check')
                  : (props.asFalse ? (props.asFalse.icon || 'fa-times') : 'fa-times')}`"
    />
    {{ (props.value !== undefined ? props.value : true) ?
       (props.asTrue ? (props.asTrue.label || 'Yes') : 'Yes')
     : (props.asFalse ? (props.asFalse.label || 'No') : 'No') }}
  </label>
</template>

<style lang="sass" scoped>

</style>
