module.exports = {
  purge: [],
  theme: {
    extend: {
      keyframes: theme => ({
        'anim-spinner': {
          '0%': {
            strokeDashoffset: '628',
            transform: 'rotateY(0deg) rotateZ(-90deg)',
            animationTimingFunction: theme('transitionTimingFunction.ease.out'),
          },
          '50%': {
            strokeDashoffset: '0',
            transform: 'rotateY(0deg) rotateZ(90deg)',
            animationTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
          '50.0001%': {
            strokeDashoffset: '0',
            transform: 'rotateY(180deg) rotateZ(90deg)',
          },
          '100%': {
            strokeDashoffset: '628',
            transform: 'rotateY(180deg) rotateZ(-90deg)',
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [],
}
