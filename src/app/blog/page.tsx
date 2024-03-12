import { Metadata} from "next";

export const metadata: Metadata = {
  title: {
    absolute: 'My blog',
  }
}

export default function Blog() {
  return (
      <div>
        <h1>My blog</h1>
      </div>
  )
}
