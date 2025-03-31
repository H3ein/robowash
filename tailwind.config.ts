
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				wash: {
					amber: '#F59E0B',
					'amber-light': '#FCD34D',
					'amber-dark': '#D97706',
					light: '#FFFFFF',
					dark: '#111827',
					gray: '#6B7280',
					cream: '#FEFAF0',
					accent: '#F59E0B',
					subtle: '#FEF3C7'
				},
				robowash: {
					gold: '#F59E0B',
					orange: '#F97316',
					red: '#EF4444',
					light: '#FFFFFF',
					dark: '#111827'
				},
				occupancy: {
					low: 'var(--occupancy-low)',
					medium: 'var(--occupancy-medium)',
					high: 'var(--occupancy-high)',
					'bg-low': 'var(--occupancy-bg-low)',
					'bg-medium': 'var(--occupancy-bg-medium)',
					'bg-high': 'var(--occupancy-bg-high)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'water-flow': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'100%': {
						backgroundPosition: '100% 50%'
					}
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				flow: {
					'0%, 100%': { transform: 'translateX(-70%)' },
					'50%': { transform: 'translateX(0%)' }
				},
				carWash: {
					'0%': { transform: 'translateX(0%)' },
					'20%': { transform: 'translateX(30%)' },
					'40%': { transform: 'translateX(60%)' },
					'60%': { transform: 'translateX(90%)' },
					'80%': { transform: 'translateX(60%)' },
					'100%': { transform: 'translateX(0%)' }
				},
				dropFall: {
					'0%': { 
						transform: 'translateY(-100%)',
						opacity: '0' 
					},
					'50%': { 
						transform: 'translateY(100%)',
						opacity: '1' 
					},
					'100%': { 
						transform: 'translateY(200%)',
						opacity: '0' 
					}
				},
				shimmer: {
					'0%': { 
						transform: 'translateX(-100%)' 
					},
					'100%': { 
						transform: 'translateX(100%)' 
					}
				},
				bounce: {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'water-flow': 'flow 5s ease-in-out infinite',
				'spin-slow': 'spin 8s linear infinite',
				'bounce': 'bounce 2s ease-in-out infinite',
				'car-wash': 'carWash 10s ease-in-out infinite',
				'drop-1': 'dropFall 1.5s ease-in infinite 0.2s',
				'drop-2': 'dropFall 1.5s ease-in infinite 0.8s',
				'drop-3': 'dropFall 1.5s ease-in infinite 1.3s',
				'shimmer': 'shimmer 2s linear infinite',
				'bounce-slow': 'bounce 3s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-amber': 'linear-gradient(90deg, #F59E0B 0%, #FCD34D 50%, #F59E0B 100%)',
				'gradient-light': 'linear-gradient(145deg, #FFFFFF 0%, #F9FAFB 100%)',
				'gradient-gold': 'linear-gradient(90deg, #D97706 0%, #F59E0B 50%, #D97706 100%)',
			},
			boxShadow: {
				'card-hover': '0 10px 30px rgba(245, 158, 11, 0.15)',
				'button-hover': '0 8px 25px rgba(245, 158, 11, 0.2)',
				'soft': '0 4px 20px rgba(245, 158, 11, 0.1)',
				'gold': '0 5px 15px rgba(245, 158, 11, 0.2)'
			},
			transitionDuration: {
				'300': '300ms',
			},
			scale: {
				'102': '1.02',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
