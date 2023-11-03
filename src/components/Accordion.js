import { useState } from 'react';

import AccordionItem from '../blocks/AccordionItem';

export default function Accordion() {
  const items = [
    {
      title: "Description",
      text: "Blending a duo of light and white Caribbean rums from Martinique and Dominican Republic as the smooth base. Spices are then added and the mix is allowed to steep for 2 days to draw out all of the flavour before being filtered and masterfully blended with natural distillates to 10%ABV. The result is a buttery, caramel-forward, savoury and spicy light spirit with a big impact both on the nose and the taste buds."
    },
    {
      title: "Taste",
      text: "Deep bonfire toffee, warming savoury spice, rounded honey sweetness, buttery caramel throughout with a hint of tropical fruit.",
    },
    {
      title: "Serve",
      text: "Simply serve 50ml chilled over ice with 150ml premium Ginger Ale and a lime wedge. 2.3% ABV."
    }
  ]

  const [openIndex, setOpenIndex] = useState(-1);

  const handleClick = (index) => () => {
    console.log(arguments)
    // If it was the same index
    if (openIndex === index) {
      // Close it
      setOpenIndex(-1);
    } else {
      // Otherwise, open the index
      setOpenIndex(index);
    }
  }

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          text={item.text}
          isOpen={openIndex === index}
          onClick={handleClick(index)}
        />
      ))}
    </div>
  );
}