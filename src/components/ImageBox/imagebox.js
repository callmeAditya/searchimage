import { Box, Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import imagebox from './imagebox.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
const ImageBox = (props) => {
  

    return (
        <>{
            props.data.length>0 && 
            <Grid container className="imagebox">

                {
                    props.data.map((ele, key) => (
                        <Grid className="images" md={4}>
                            <img style={{ background: `${ele.color}` }} src={ele.urls.small} />
                            <Box className="download">
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <FavoriteIcon style={{ color: "red", paddingRight: '5px' }} />
                                    <p>{ele.likes}</p>
                                </Box>

                                <Button target={"_blank"} href={`${ele.urls.regular}`   } download={true|'image.jpeg'}>Download</Button>
                            </Box>
                        </Grid>
                    ))
                }


            </Grid>

        }
        </>


    )
}

export default ImageBox