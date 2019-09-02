export default {
  data: () => ({
    hoveredIconName: null,
  }),
  methods: {
    setHoveredIconName(name) {
      this.hoveredIconName = name;
    },
  },
};
