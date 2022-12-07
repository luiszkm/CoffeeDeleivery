import { Card } from '../components/Card'
import { Hero } from '../components/Hero'
export function Home() {
  return (
    <div>
      <Hero />
      <section>
        <h2>Nossos cafés</h2>
        <Card />
      </section>
    </div>
  )
}
