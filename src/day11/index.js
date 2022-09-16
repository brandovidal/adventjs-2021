export default function shouldBuyFidelity (times) {
  // ¡No olvides compartir tu solución en redes!
  const TICKET_COST = 12
  const BUY_NORMAL = TICKET_COST * times

  const INIT_FIDELITY_COST = 250
  const TICKET_DISCOUNT = 0.75
  const INIT_VALUE = 0
  const REMAINDER_FIDELITY_COST = Array.from({ length: times }).reduce(
    (result, _, currentIndex) => result + TICKET_COST * Math.pow(TICKET_DISCOUNT, currentIndex + 1),
    INIT_VALUE
  )
  const BUY_FIDELITY = INIT_FIDELITY_COST + REMAINDER_FIDELITY_COST
  return BUY_FIDELITY < BUY_NORMAL
}
