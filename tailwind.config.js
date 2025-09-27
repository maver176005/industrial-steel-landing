module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Steel Blue
        primary: {
          50: "#EBF4FF", // steel-blue-50
          100: "#DBEAFE", // steel-blue-100
          200: "#BFDBFE", // steel-blue-200
          300: "#93C5FD", // steel-blue-300
          400: "#60A5FA", // steel-blue-400
          500: "#3B82F6", // steel-blue-500
          600: "#2563EB", // steel-blue-600
          700: "#2C5282", // steel-blue-700
          800: "#1E3A8A", // steel-blue-800
          900: "#1E40AF", // steel-blue-900
          DEFAULT: "#2C5282", // steel-blue-700
        },
        // Secondary Supporting Blue
        secondary: {
          50: "#F0FDFA", // teal-50
          100: "#CCFBF1", // teal-100
          200: "#99F6E4", // teal-200
          300: "#5EEAD4", // teal-300
          400: "#2DD4BF", // teal-400
          500: "#14B8A6", // teal-500
          600: "#4A90A4", // teal-600
          700: "#0F766E", // teal-700
          800: "#115E59", // teal-800
          900: "#134E4A", // teal-900
          DEFAULT: "#4A90A4", // teal-600
        },
        // Accent Safety Orange
        accent: {
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#FF8C00", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
          DEFAULT: "#FF8C00", // orange-500
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F7FAFC", // gray-50
        // Text Colors
        text: {
          primary: "#1A202C", // gray-900
          secondary: "#4A5568", // gray-600
        },
        // Status Colors
        success: {
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#48BB78", // green-500
          600: "#38A169", // green-600
          DEFAULT: "#38A169", // green-600
        },
        warning: {
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          500: "#FF8C00", // orange-500
          DEFAULT: "#FF8C00", // orange-500
        },
        error: {
          50: "#FED7D7", // red-50
          100: "#FEB2B2", // red-100
          500: "#E53E3E", // red-500
          DEFAULT: "#E53E3E", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-50
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'cta-hover': '0 6px 12px -2px rgba(0, 0, 0, 0.15)',
      },
      borderWidth: {
        'spec': '1px',
      },
    },
  },
  plugins: [],
}