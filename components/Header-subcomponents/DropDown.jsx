import Image from 'next/image';
import React from 'react'
import firstImg from '@assets/dropDown1.webp'
import secondImg from '@assets/dropDown2Short.jpg'
import thirdImg from '@assets/dropDown3Shortre.jpg'
import categoryDataToDisplay from "@/helpers/categoryDataToDisplay";
import { useRouter } from 'next/navigation';

const dropdownImages = [firstImg, secondImg, thirdImg];

const items = Array.from({ length: 5 }, (_, index) => index + 1);
const DropDown = ({ showDropdown, setShowDropdown, categories }) => {
    const router = useRouter();
    console.log(categoryDataToDisplay(categories))
    return (
        <>
            {showDropdown && (
                <div
                    className="dropdown-container"
                    onMouseOver={() => setShowDropdown(true)}
                    onMouseOut={() => setShowDropdown(false)}
                >
                    <div className="left">
                        <div className="grid">
                            {categories && categoryDataToDisplay(categories).map((categoryData, index) => (
                                <div
                                    key={categoryData.category.id}
                                    className="row"
                                >
                                    <p
                                        className="first"
                                    >
                                        {categoryData.category.name}
                                    </p>

                                    {categoryData.subCategories?.length > 0 && categoryData.subCategories.map((subcategory, index) => (
                                        <p
                                            key={subcategory.id} className="header-links"
                                            onClick={() => router.push(`/shop/${subcategory.id}`)}
                                        >
                                            {subcategory.name}
                                        </p>
                                    ))}
                                    {categoryData.subCategories?.length === 0 && <p
                                        className="header-links"
                                        onClick={() => router.push(`/shop/${categoryData.category.id}`)}
                                    >
                                        {categoryData.category.name}
                                    </p>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        <div className="image-container">
                            {dropdownImages.map((image, index) => (
                                <Image
                                    key={image}
                                    src={image}
                                    priority={true}
                                    alt="Image 1"
                                    layout='responsive'
                                    height={5}
                                    width={4}
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                            ))}
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default DropDown
