<template>
  <div class="icon-wrapper">
    <simple-svg
      :filepath="path"
      :width="width"
      :height="height"
      class="icon-wrapper__svg"
      :class="{
        'icon-wrapper__svg_active': active,
        'icon-wrapper__svg_subgray2': subGrayTwo,
        'icon-wrapper__svg_active-subred': activeSubRed,
        'icon-wrapper__svg_active-subgreen': activeSubGreen,
        'icon-wrapper__svg_active-lightgrey': activeLightGrey,
        'icon-wrapper__svg_no-hover': noHover,
      }"
    />
  </div>
</template>
<script>
import { SimpleSVG } from 'vue-simple-svg';

export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '11px',
    },
    height: {
      type: String,
      default: '15px',
    },
    active: {
      type: Boolean,
      default: false,
    },
    subGrayTwo: {
      type: Boolean,
      default: false,
    },
    activeSubRed: {
      type: Boolean,
      default: false,
    },
    activeSubGreen: {
      type: Boolean,
      default: false,
    },
    activeLightGrey: {
      type: Boolean,
      default: false,
    },
    noHover: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    'simple-svg': SimpleSVG,
  },
};
</script>
<style lang="scss" scoped>
$light-grey: #727d85;
$sub-grey2: #9ca5ad;
$sub-red: #cb223c;
$sub-green: #5ead4b;
$main-blue-color: #0080ff;

.icon-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;

  /deep/ .icon-wrapper__svg {
    cursor: pointer;

    .simple-svg {
      display: block;
      fill: $light-grey;

      & .stroke {
        stroke: $light-grey;
      }

      & .fill {
        fill: $light-grey;
      }
    }

    &.icon-wrapper__svg_subgray2 {
      .simple-svg {
        fill: $sub-grey2;

        & .stroke {
          stroke: $sub-grey2;
        }

        & .fill {
          fill: $sub-grey2;
        }
      }
    }

    &.icon-wrapper__svg_active-subred {
      &:hover,
      &.icon-wrapper__svg_active {
        .simple-svg {
          fill: $sub-red;

          & .stroke {
            stroke: $sub-red;
          }

          & .fill {
            fill: $sub-red;
          }
        }
      }
    }

    &.icon-wrapper__svg_active-subgreen {
      &:hover,
      &.icon-wrapper__svg_active {
        .simple-svg {
          fill: $sub-green;

          & .stroke {
            stroke: $sub-green;
          }

          & .fill {
            fill: $sub-green;
          }
        }
      }
    }

    &.icon-wrapper__svg_active-lightgrey {
      &:hover,
      &.icon-wrapper__svg_active {
        .simple-svg {
          fill: $light-grey;

          & .stroke {
            stroke: $light-grey;
          }

          & .fill {
            fill: $light-grey;
          }
        }
      }
    }

    &:hover,
    &.icon-wrapper__svg_active {
      .simple-svg {
        fill: $main-blue-color;

        & .stroke {
          stroke: $main-blue-color;
        }

        & .fill {
          fill: $main-blue-color;
        }
      }
    }
    &.icon-wrapper__svg_no-hover {
      .simple-svg {
        display: block;
        fill: $light-grey !important;

        & .stroke {
          stroke: $light-grey !important;
        }

        & .fill {
          fill: $light-grey !important;
        }
      }
    }
  }
}
</style>