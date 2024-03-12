export default function Docs({ params }:{
  params: {
    slug: string[]
  }
}) {
  if (params.slug?.length === 2) {
    return (
        <div>
          <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
        </div>
    )
  }
  return (
      <div>
        <h1>Docs</h1>
      </div>
  )
}
