import react from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, TextField, Typography, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import checkbox from '@mui/material/Cehckbox';

const Login = () =>{

const paperstyle ={
    padding: "20px",
    height: "70vh" ,
    width:"280" ,
    margin: "20px auto"
}

const avatarStyle={
    backgroundColor: "green"

}
    const textfield ={
        margin: '10px'
    }

      const btnstle = {
        margin: '8px 0'
      }  

      return(

        <grid>
            <paper elavation = {10} style={paperstyle}>
                <grid align = "center">
                    <Avatar style = {avatarStyle}> </Avatar>
                    <h4>sign In</h4> 
                </grid>

                <textfield
                label = 'userName'
                style= {textfield}
                placeholder= 'Eneter Username'
                fullwidth
                required>
                </textfield>

                <textfield
                label = 'Password'
                style={textfield}
                placeholder= 'Enter password'
                fullwidth
                required>
                </textfield>

                <FormControlLabel
                control = {
                    <Checkbox
                    name='checked'
                    color='primary'
                    />}
                    label = 'Remeber me'
                    />
                    <Button
                    type = "submit"
                    color= "primary"
                    variant = "contained"
                    style= {btnsyle}
                    fullwidth
                    >
                    sign In
                    </Button>

                    <Typography
                    style = {textfield}
                    >
                        <link href = "#">
                            Forget password?
                        </link>


                    </Typography>

                    <Typography
                        style = {textfield}
                        >
                            <link href = "#">
                                Dont have an account? Sign up!
                            </link>

                            </Typography>
                
            </paper>
        </grid>
    //  <typography>
    //  <p> Hello</P>


    //  </Typography>
      )
    


}
export default Login;
