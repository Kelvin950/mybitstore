import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
      },
      {
        protocol: 'https',
        hostname: 'www.mybitstore.com',
      },

      {
        protocol:'https' ,
        hostname:'encrypted-tbn0.gstatic.com'
      } ,

      {protocol:"https" ,
        hostname:"media.licdn.com"
      } , 

    {
      protocol:"https" , 
      hostname:"newsghana.com.gh" 
    } ,
    {
      protocol:"https" , 
      hostname:"www.telecel.com.gh" 
    } ,
    {
      protocol:"https" , 
      hostname:"statrys.com" 
    } ,
    ],
  },
};

export default nextConfig;
