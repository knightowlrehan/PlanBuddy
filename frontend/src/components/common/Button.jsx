const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300'
  }
  
  return (
    <button 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button