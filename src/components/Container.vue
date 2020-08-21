<template>
  <div class="container" :class="{ isrow: isRow, iscolumn: !isRow }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
type Direction = "row" | "column";
@Options({
  props: {
    direction: {
      type: String,
      default: "column"
    }
  }
})
export default class Container extends Vue {
  direction!: Direction;
  get isRow() {
    return this.direction === "row";
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  &.isrow {
    flex-direction: row;
  }
  &.iscolumn {
    flex-direction: column;
  }
}
</style>
