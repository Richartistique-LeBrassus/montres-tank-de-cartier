import Image from 'next/image'
import React from 'react'

const ProductGrid = () => {
  return (
    <div className="w-[50vw] h-fit flex-flex-col">
      <Image
        alt="Jackie Kennendy wearing her Cartier Tank."
        fill
        src="/imgs/2.avif"
        className="w-[40vw] h-auto object-cover"
      />
      <div className="grid grid-cols-2">
        <Image
          alt="Jackie Kennendy wearing her Cartier Tank."
          fill
          src="/imgs/2.avif"
          className="w-[30vw] h-auto object-cover"
        />
        <Image
          alt="Jackie Kennendy wearing her Cartier Tank."
          fill
          src="/imgs/main.avif"
          className="w-[30vw] h-auto object-cover"
        />
        <Image
          alt="Jackie Kennendy wearing her Cartier Tank."
          fill
          src="/imgs/3.avif"
          className="w-[30vw] h-auto object-cover"
        />
        <Image
          alt="Jackie Kennendy wearing her Cartier Tank."
          fill
          src="/imgs/4.avif"
          className="w-[30vw] h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default ProductGrid