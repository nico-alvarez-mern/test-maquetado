import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {Filtros} from '../filtros/Filtros'
const useStyles = makeStyles({
  list: {
    width: '15rem',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    flexDirection: 'column'
  },
  fullList: {
    width: 'auto',
  },
  button: {
      fontSize: '20px',
      outline: 'none'
  },
  divider: {
    borderTop: '1px solid black', 
    marginBottom: 10
  }
});

export const SideBar = ({open,setOpen,setFiltro,filtro})=> {

  const classes = useStyles();

  const handleClick = () => setOpen(false);

  return (
    <Drawer anchor="left" open={open} onClose={()=> setOpen(false)}>
        <div className={classes.list}>
            <Button className={classes.button}
                    color="inherit"
                    variant="text"
                    onClick={handleClick}
            >
                SALE
            </Button>
            <Button className={classes.button}
                    color="inherit"
                    variant="text"
                    onClick={handleClick}
            >
                E-SHOP
            </Button>
            <Button className={classes.button}
                    color="inherit"
                    variant="text"
                    onClick={handleClick}
            >
                LOOKBOOK
            </Button>
            <Button className={classes.button}
                    color="inherit"
                    variant="text"
                    onClick={handleClick}
            >
                CAMPAÑA
            </Button>
            <Button className={classes.button}
                    color="inherit"
                    variant="text"
                    onClick={handleClick}
            >
                LOCALES
            </Button>
            <hr className={classes.divider} />
            <div className="container">
              <Filtros setFiltro={setFiltro} filtro={filtro}/> 
          </div>
        </div>
    </Drawer>
  );
}
