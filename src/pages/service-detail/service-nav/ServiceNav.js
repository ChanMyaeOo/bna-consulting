import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useStyles from './styles'

const ServiceNav = () => {
    const classes = useStyles();
    return (
        <ul className={classes.serviceNav}>
                    <NavLink to="/services/bookkeeping"><li>
                        Bookkeeping <span>&gt;</span>
                    </li>
                    </NavLink>

                    <NavLink to="/services/payroll">
                    <li>
                        Payroll <span>&gt;</span>
                    </li>
                    </NavLink>

                    <NavLink to="/services/vat">
                    <li>
                       VAT <span>&gt;</span>
                    </li>
                    </NavLink>

                    <NavLink to="/services/self-assessment">
                    <li>
                        Self Assessment <span>&gt;</span>
                    </li>
                    </NavLink>

                    <NavLink to="/services/cis">
                    <li>
                        CIS <span>&gt;</span>
                    </li>
                    </NavLink>


                    <NavLink to="/services/limited-company">
                    <li>
                        Limited Company <span>&gt;</span>
                    </li>
                    </NavLink>

                    <NavLink to="/services/annual-accounts">
                    <li>
                        Annual Accounts <span>&gt;</span>
                    </li>
                    </NavLink>


                    <NavLink to="/services/annual-returns">
                    <li>
                        Annual Returns <span>&gt;</span>
                    </li>
                    </NavLink>

                    <NavLink to="/services/utr-number">
                    <li>
                        UTR Number <span>&gt;</span>
                    </li>
                    </NavLink>
                </ul>
    )
}

export default ServiceNav
