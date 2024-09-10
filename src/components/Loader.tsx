import { helix } from 'ldrs'

const Loader = () => {
    helix.register()
  return (
        <div className="w-screen h-screen flex items-center justify-center">
          <l-helix
            size="45"
            speed="2.5" 
            color="black" 
          >
          </l-helix>
        </div>
  )
}
export default Loader