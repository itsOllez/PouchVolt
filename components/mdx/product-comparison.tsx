import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Star } from "lucide-react"

interface Product {
  name: string
  strength: string
  flavors: string[]
  price: string
  rating: number
  pros: string[]
  cons: string[]
}

interface ProductComparisonProps {
  products: Product[]
}

export function ProductComparison({ products }: ProductComparisonProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Strength</TableHead>
          <TableHead>Flavors</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Pros</TableHead>
          <TableHead>Cons</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.strength}</TableCell>
            <TableCell>{product.flavors.join(", ")}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </TableCell>
            <TableCell>
              <ul className="list-disc list-inside">
                {product.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </TableCell>
            <TableCell>
              <ul className="list-disc list-inside">
                {product.cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}