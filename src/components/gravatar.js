const gravatarHash = async (email = '') => {
  const encodedEmail = new TextEncoder().encode(email)
  const digested = await crypto.subtle.digest({ name: 'MD5' }, encodedEmail)
  return digested.map(i => i.toString(16).padStart(2, '0')).join('')
}

export default function Gravatar({ email }) {
  const hash = gravatarHash(email)
  const url = `https://www.gravatar.com/avatar/${hash}`
  return (
    <img className="h-8 w-auto" src={url} alt={hash} />
  )
}
