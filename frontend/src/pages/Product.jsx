import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Tags from "../components/Tags";
import {
    Star,
    AddShoppingCart,
    Check,
    West,
    Straighten,
    DescriptionOutlined,
    ReviewsOutlined,
} from "@mui/icons-material";
import { listProductDetail } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
// import Message from "../components/Message";

function Product({ params }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const location = useLocation();
    const productDetails = useSelector((state) => state.productDetails);
    const { error, loading, product } = productDetails;
    const cartItemsList = useSelector((state) => state.cart.cartItemsList);

    const [activeTab, setActiveTab] = useState("description");
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        dispatch(listProductDetail(id));
    }, [dispatch, id]);

    useEffect(() => {
        const existingItem = cartItemsList.find(
            (item) => item.productId === product.id
        );
        setIsAddedToCart(!!existingItem);
    }, [cartItemsList, product.id]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleAddToCart = (product) => {
        if (!isAddedToCart) {
            dispatch(addToCart(product));
            setIsAddedToCart(true);
        }
    };

    const {
        image,
        productName,
        // productInfo,
        numReviews,
        price,
        rating,
        stockCount,
        productBrand,
        productCategories,
        productDescription,
        productSpecification,
        productReviews,
    } = product;

    const infoBtns = [
        {
            btnTabName: "Description",
            btnTabMethod: "description",
            btnIcon: <DescriptionOutlined style={{ fontSize: "2.8rem" }} />,
        },
        {
            btnTabName: "Specifications",
            btnTabMethod: "specifications",
            btnIcon: <Straighten style={{ fontSize: "2.8rem" }} />,
        },
        {
            btnTabName: "Reviews",
            btnTabMethod: "reviews",
            btnIcon: <ReviewsOutlined style={{ fontSize: "2.8rem" }} />,
        },
    ];
    const formatText = (text) => {
        if (!text) return null;

        return text.split("\n").map((line, index) => {
            const trimmedLine = line.trim();

            // Check the level of nesting based on the number of leading dashes
            const nestingLevel =
                (trimmedLine.match(/^(-+)/) || [])[0]?.length || 0;

            // Define symbols for different nesting levels
            const symbols = ["◆", "✸", "▸"];
            const symbol =
                nestingLevel > 0 && nestingLevel <= symbols.length
                    ? symbols[nestingLevel - 1]
                    : ""; // Default to no symbol if level exceeds

            // Clean the text by removing leading dashes
            const content = trimmedLine.replace(/^(-+)/, "").trim();

            // Check for colon to bold the left part
            const colonIndex = content.indexOf(":");
            const hasColon = colonIndex !== -1;

            return (
                <div
                    key={index}
                    className={`flex items-start mb-1 ${
                        nestingLevel > 0 ? `ml-${nestingLevel * 4}` : ""
                    }`} // Indent based on nesting level
                >
                    {/* Render the nesting symbol */}
                    {symbol && <span className="mr-2">{symbol}</span>}

                    {/* Render content with bold before colon */}
                    {hasColon ? (
                        <span>
                            <span className="font-bold">
                                {content.slice(0, colonIndex + 1)}
                            </span>{" "}
                            {content.slice(colonIndex + 1).trim()}
                        </span>
                    ) : (
                        <span>{content}</span>
                    )}
                </div>
            );
        });
    };

    return (
        <>
            <Navbar />
            <Link
                to={`/store`}
                className="arrow-btn absolute left-8 my-8 px-4 py-2  text-[#560000] text-2xl font-bold"
            >
                <West style={{ fontSize: "3.6rem" }} />
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Error message={error} />
            ) : (
                <div className="product p-8 grid grid-cols-[2fr_3fr] tab:flex tab:flex-col tab:items-start tab:justify-start gap-8 sm_desk:gap-20 items-start justify-center text-xl bg-[#e4efe4] pt-32">
                    <div className="image-container self-center w-[87%] sm_desk:w-[105%] lg_tab:w-[108%] tab:w-[80%] sm_tab:w-[95%] border-2 border-black bg-white">
                        <img src={image} alt={productName} className="w-full" />
                    </div>
                    <div className="product-info-container flex flex-col items-start justify-center gap-6">
                        <div className="product-main-info flex flex-col items-start justify-center text-left">
                            <div className="absolute top-[20%] left-[40.5%] sm_desk:top-[25%] sm_desk:left-[41.5%] lg_tab:left-[42%] tab:top-[110%] tab:left-[1.5%] sm_tab:top-[97%] mob:top-[77%] mob:left-[2%] w-60">
                                {!stockCount ? (
                                    <Tags
                                        tagData="Out of Stock"
                                        tagColor="#fff"
                                        tagBackgroundColor="#fb2d2d"
                                    />
                                ) : stockCount < 50 ? (
                                    <Tags
                                        tagData="Only few left"
                                        tagColor="#fff"
                                        tagBackgroundColor="#ff8811"
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="flex items-center justify-center gap-[30rem]">
                                <h4 className="product-brand text-3xl font-extrabold text-[#560000]">
                                    {productBrand}
                                </h4>
                            </div>
                            <h2 className="product-name text-5xl font-bold">
                                {productName}
                            </h2>
                            <ul className="product-category-list flex flex-wrap items-center justify-start gap-2 mt-2 p-2">
                                {(productCategories || []).map((category) => {
                                    return (
                                        <li
                                            className="category-item rounded-lg text-2xl font-semibold bg-[#560000] text-white p-2 text-center"
                                            key={category}
                                        >
                                            {category}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <ul className="info-btns flex items-center justify-center text-center gap-8 p-0 m-auto border-2 rounded-[4rem] bg-[#ddd] transition-all ease-in-out duration-1000">
                            {infoBtns.map((btn, index) => (
                                <li key={index}>
                                    <button
                                        className={`info-btn p-6 flex gap-4 items-center justify-center ${
                                            activeTab === btn.btnTabMethod
                                                ? "bg-white font-bold transition-all ease-in-out duration-1000"
                                                : ""
                                        } text-3xl`}
                                        onClick={() =>
                                            handleTabClick(btn.btnTabMethod)
                                        }
                                    >
                                        <>{btn.btnTabName}</>
                                        <>{btn.btnIcon}</>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="content py-4 px-8 max-h-[30rem] min-h-[30rem] mx-auto w-[95%] text-left indent-4 overflow-y-auto scrollbar">
                            {activeTab === "description" && (
                                <div className="description text-3xl">
                                    {productDescription}
                                </div>
                            )}
                            {activeTab === "specifications" && (
                                <ul className="specification text-3xl list-disc list-inside space-y-6 space-x-10">
                                    {productSpecification &&
                                        formatText(productSpecification)}
                                </ul>
                            )}

                            {activeTab === "reviews" && (
                                <ul className="specification text-3xl list-disc list-inside">
                                    {productReviews &&
                                        formatText(productReviews)}
                                </ul>
                            )}
                        </div>
                        <div className="product-action m-auto flex items-center justify-center gap-60 sm_desk:gap-48 lg_tab:gap-24 font-bold text-[#014210]">
                            <div className="rating flex items-center justify-center text-4xl">
                                <h3>{rating}</h3>
                                <Star
                                    style={{
                                        textAlign: "center",
                                        verticalAlign: "center",
                                        fontSize: "2.8rem",
                                    }}
                                />
                                {` (${numReviews})`}
                                {/* {`from ${numReviews} reviews`} */}
                            </div>
                            <button
                                className={`add-to-cart-btn flex items-center justify-center gap-8 border-4 rounded-lg shadow-[5px_5px_10px_rgba(86,0,0,0.3)] transition-all ease duration-300 font-semibold text-[2.4rem] lg_tab:text-[2rem] p-4
        ${
            !stockCount
                ? "cursor-not-allowed text-[#888] border-[#888] hover:text-[#888] hover:border-[#888]"
                : "border-[#560000] text-[#560000] bg-white hover:border-[#014210] hover:text-[#014210] hover:shadow-[5px_5px_10px_rgba(1,66,16,0.3)]"
        }`}
                                onClick={() => handleAddToCart(product)}
                                disabled={!stockCount || isAddedToCart}
                            >
                                {isAddedToCart ? "Added" : "Add to Cart"}
                                {isAddedToCart ? (
                                    <Check />
                                ) : (
                                    <AddShoppingCart
                                        style={{ fontSize: "3rem" }}
                                    />
                                )}
                            </button>
                            {/* {isAddedToCart ? (
                                <Message
                                messageType={"fail"}
                                message={"Item already added to cart."}
                                />
                                ) : (
                                    ""
                            )} */}
                            {/* {isAddedToCart && (
                                <Message messageType={"success"} message={"Item added to cart!"} />
                            )} */}
                            <h3 className="product-price text-4xl">
                                ₹ {price}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default Product;
