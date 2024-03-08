import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left column start */}
                    <div className='w-full md:w-auto flex=[1.5] max-w-[500px] mx-auto lg-mx-0'>
                        <ProductDetailsCarousel />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className='flex-[1] py-3'>
                        {/* PRODUCT TITLE */}
                        <div className='text-[34px] font-semibold mb-2'>
                            Jordan Retro 6 6
                        </div>

                        {/* PRODUCT SUB TITLE */}
                        <div className='text-lg font-semibold mb-5'>
                            Men's Golf Shoes
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className='text-lg font-semibold'>
                            MRP : 19 695.00
                        </div>
                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`(Also include all applicable duties)`}
                        </div>


                        {/* PRODUCT SIZE RANGE START */}
                        <div className='mb-10'>
                            {/* HEADING START */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-semibold text-black/[0.5]'>
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed ng-black/[0.1] opacity-50'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed ng-black/[0.1] opacity-50'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed ng-black/[0.1] opacity-50'>
                                    UK 6
                                </div>
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            <div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"

                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>

                            <div className="text-md mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>
                <RelatedProducts/>
            </Wrapper>
        </div>
    )
}

export default ProductDetails
