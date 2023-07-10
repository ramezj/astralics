
export default function PasswordInput(props) {
    return (
      <>
      <input 
      autoComplete="off"
      aria-autocomplete="off"
      type="password" 
      id="first_name" 
      className="
        bg-gray-50
        text-gray-900 
        text-sm rounded-lg 
        block 
        w-1/2 
        p-2.5 
        dark:bg-gray-800 
        dark:border-gray-600 
        dark:placeholder-gray-400 
        dark:text-white 
        outline-none
        font-bold
        " 
      placeholder="********" 
      required 
      onChange={props.onChange}
      />
      </>
    )
  }
  