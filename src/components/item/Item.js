import { Link } from "react-router-dom"

const Item = ({ data, addToCart }) => {

    const { id, image, title, price } = data

    return (
        <div className="border-solid shadow-slate-700 rounded-[20px] shadow-lg p-3 hover:scale-105">
            <div >
                <div className="flex items-center justify-center">
                    <img className="h-[24rem]" src={image} alt="" />
                </div>
                <div className=" text-center mt-2">
                    <Link to={`/product/${id}`} className="text-xl">
                        {title}
                    </Link>
                </div>
                <div className="flex justify-evenly mt-3">
                    <span className="mt-2 text-xl text-amber-950 font-bold" style={{ marginRight: 15 }}>
                        ${price}
                    </span>
                    <div className="hover:scale-105 focus:cursor-pointer" onClick={addToCart}>
                        <img className="cartImg " src="https://img.icons8.com/fluency/48/fast-cart.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Item }