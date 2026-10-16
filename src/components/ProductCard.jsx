import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link 
      to="/products" 
      className="group block min-w-0 bg-white transition duration-300 hover:-translate-y-1.5 cursor-pointer"
    >
      <article>
        <div className="relative h-[180px] overflow-hidden rounded-lg border border-[#eee0d4] bg-[#fbf7f2] sm:h-[205px] md:h-[220px]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          {product.badge && (
            <span className="absolute right-2 top-2 rounded-full bg-[#c3892b] px-2 py-1 text-[9px] font-semibold text-white">
              {product.badge}
            </span>
          )}
        </div>
        <div className="px-1.5 pb-1 pt-2 sm:px-2">
          <h3 className="truncate text-[10px] font-semibold text-ink sm:text-[11px]">
            {product.name}
          </h3>
        </div>
      </article>
    </Link>
  )
}