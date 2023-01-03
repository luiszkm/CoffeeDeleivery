import { Card } from '../components/Card'
import { Hero } from '../components/Hero'

import AllCoffee from '../api.json'
interface coffeeProps {
  id: string
 image: string
 name: string
 price: number
 description: string
 types: string[]

}


export function Home() {
  return (
    <div>
      <Hero />
      <section className="flex flex-col items-center gap-9 relative mt-8 ">
        <h2 className="font-mono text-3xl font-extrabold md:left-0 absolute  text-base-subTitle">
          Nossos cafés
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:mt-20 lg:grid-cols-4 ">
          {
            AllCoffee.map(item=>(
              <Card  data={item} />
            ))
          }
      
        </div>
      </section>
    </div>
  )
}
