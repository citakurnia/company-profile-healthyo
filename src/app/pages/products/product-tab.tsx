import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Entry } from "contentful";
import { TypeProductFields } from "@/types/contentful";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full"
      style={{ height: "100%", display: value === index ? "block" : "none" }}
    >
      {value === index && (
        <div className="p-3 h-full flex flex-col justify-center">
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TabProduct({
  products,
  images,
}: {
  products: Entry<TypeProductFields, undefined, string>[];
  images: string[];
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (products !== null) {
    return (
      <div className="flex flex-shrink-0 flex-row bg-white/70 rounded-2xl w-full">
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            margin: 1,
            borderColor: "divider",
            width: "210px",
            "& .MuiTab-root": {
              width: "100%",
              alignItems: "flex-start",
              textAlign: "left",
              "&.Mui-selected": {
                color: "#66aacb", // Change text color of the selected tab
              },
            },
            "& .MuiTab-wrapper": {
              alignItems: "flex-start",
              textAlign: "left",
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#66aacb", // Change the color of the indicator line
            },
          }}
        >
          <Tab label="Mango" {...a11yProps(0)} />
          <Tab label="Blueberry" {...a11yProps(1)} />
          <Tab label="Strawberry" {...a11yProps(2)} />
          <Tab label="Plain" {...a11yProps(3)} />
        </Tabs>
        {products.map((product, index) => (
          <TabPanel value={value} index={index} key={product.fields.productId}>
            <div
              key={product.fields.productId}
              className="my-3 flex flex-col items-center"
            >
              <Image
                className="drop-shadow-md"
                alt="image"
                src={images[product.fields.productId - 1]}
                width={200}
                height={200}
                priority={true}
              />
              <p className="text-blue-deep font-semibold">
                {product.fields.title}
              </p>
              <p className="text-xs px-4 pt-3 text-center">
                {product.fields.productDescription}
              </p>
              <div className="flex text-md justify-between w-full px-4 pt-4 text-xs">
                <div className="bg-blue-soft py-1 px-2 rounded-xl">
                  Rp. {product.fields.price}
                </div>
                <div className="bg-pink-soft py-1 px-2 rounded-xl text-black/70 hover:bg-blue-med font-semibold">
                  Buy Here
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </div>
    );
  }
}
