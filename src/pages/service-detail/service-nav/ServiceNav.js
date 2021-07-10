import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const ServiceNav = () => {
    const classes = useStyles();
    return (
        <ul className={classes.serviceNav}>
                    <Link><li>
                        Bookkeeping <span>&gt;</span>
                    </li>
                    </Link>

                    <Link>
                    <li>
                        Payroll
                    </li>
                    </Link>

                    <Link>
                    <li>
                       VAT
                    </li>
                    </Link>

                    <Link>
                    <li>
                        Self Assessment
                    </li>
                    </Link>

                    <Link>
                    <li>
                        CIS
                    </li>
                    </Link>


                    <Link>
                    <li>
                        Limited Company
                    </li>
                    </Link>

                    <Link>
                    <li>
                        Annual Accounts
                    </li>
                    </Link>


                    <Link>
                    <li>
                        Annual Returns
                    </li>
                    </Link>

                    <Link>
                    <li>
                        UTR Number
                    </li>
                    </Link>
                </ul>
    )
}

export default ServiceNav
