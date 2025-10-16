import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb"
import { FaWordpress } from "react-icons/fa";
import { SiWoo } from "react-icons/si";

const stackItems = [
 
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },  
  { id: 2, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 3, name: "WordPress", icon: FaWordpress, color: "#215cc2" },
  { id: 4, name: "WooCommerce", icon: SiWoo, color: "#9c1aa1" },
  { id: 5, name: "TailwindCss", icon: RiTailwindCssFill, color: "#42c2f5" },   
]

const HardSKills =()=>{

    return (
        <div>
            <section className="py-16 glass"> 
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p id="skills" className="titlesmini">My Stacks</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                <item.icon
                  className="w-32 h-32"
                  style={{ color: item.color }}
                />
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

     </div>            

       
    )
}
export default HardSKills