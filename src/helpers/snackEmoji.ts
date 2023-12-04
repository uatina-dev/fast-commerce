export function snackEmoji(nome: string) {
  switch (nome.toLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🍹'
    case 'ice-cream':
      return '🍨'
    default:
      return '👨‍🦱🔍'
  }
}
