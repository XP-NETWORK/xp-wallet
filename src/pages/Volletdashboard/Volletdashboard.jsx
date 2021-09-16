import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Form} from "react-bootstrap";
import SendIcon from "../../assets/img/send.svg";
import ReciveIcon from "../../assets/img/send.svg";
import Dashboard from "../../assets/img/menu_icons/dashboard.svg";
import Transactions from "../../assets/img/menu_icons/trans.svg";
import NFTs from "../../assets/img/menu_icons/nfts.svg";
import Tokens from "../../assets/img/menu_icons/tokens.svg";
import Stake from "../../assets/img/menu_icons/stake.svg";
import Delegate from "../../assets/img/menu_icons/delegate.svg";
import Validate from "../../assets/img/menu_icons/validate.svg";
import TokkenScan from "../../assets/img/tokken_scan.svg";
import TokkenCopy from "../../assets/img/tokken_copy.svg";
import trending_up from "../../assets/img/trending_up.svg";
import xpnet_logo from "../../assets/img/xpnet_logo.svg";
import Etherium_logo from "../../assets/img/Etherium_logo.svg";
import Elrond_logo from "../../assets/img/Elrond_logo.svg";
import viewAll from "../../assets/img/viewAll.svg";
import nfx_logo1 from "../../assets/img/nfx_logo/nfx_logo-1.png";
import nfx_logo2 from "../../assets/img/nfx_logo/nfx_logo-2.png";
import nfx_logo3 from "../../assets/img/nfx_logo/nfx_logo-3.png";
import nfx_logo4 from "../../assets/img/nfx_logo/nfx_logo-4.png";
import nfx_logo5 from "../../assets/img/nfx_logo/nfx_logo-5.png";
import nfx_logo6 from "../../assets/img/nfx_logo/nfx_logo-6.png";
import nfx_logo7 from "../../assets/img/nfx_logo/nfx_logo-7.png";
import nfx_logo8 from "../../assets/img/nfx_logo/nfx_logo-8.png";
import nfx_logo9 from "../../assets/img/nfx_logo/nfx_logo-9.png";
import Filter from "../../assets/img/filter-filled.svg";
import copytra from "../../assets/img/copy-tra.svg";
import traSend from "../../assets/img/traSend.svg";
import traRec from "../../assets/img/traRec.svg";
import traNfs from "../../assets/img/traNfs.png";
const Volletdashboard = () => {
	return (
	<main className="mainContainerArea">
            <div className="main_container">
                <div className="row">
                    <div className="contai_leftside_col">
                        <div className="contai_leftside">
                            <div className="leftSideSelect">
                                <select name="" id="">
                                    <option value="Alice Derived">Alice Derived</option>
                                    <option value="Alice Derived">Alice Derived</option>
                                    <option value="Alice Derived">Alice Derived</option>
                                    <option value="Alice Derived">Alice Derived</option>
                                </select>
                            </div>
                            <div className="sendRecBtns">
                                <Link to="#" className="sendReceBtn buttonSend"><Image src={SendIcon} fluid/> Send</Link>
                                <Link to="#" className="sendReceBtn buttonRecive"><Image src={ReciveIcon} fluid/> Receive</Link>
                            </div>
                            <div className="sidebarMenuList">
                                <p>Menu</p>
                                <ul className="sideMenuList" >
                                    <li className="dash_menu_item active"><Link to="#"><Image src={Dashboard} fluid/> Dashboard</Link></li>
                                    <li className="dash_menu_item"><Link to="#"><Image src={Transactions} fluid/> Transactions</Link></li>
                                    <li className="dash_menu_item"><Link to="#"><Image src={NFTs} fluid/> NFTs</Link></li>
                                    <li className="dash_menu_item"><Link to="#"><Image src={Tokens} fluid/> Tokens</Link></li>
                                </ul>
                            </div>
                            <div className="sidebarMenuList">
                                <p>Staking</p>
                                <ul className="sideMenuList">
                                    <li className="dash_menu_item"><Link to="#"><Image src={Stake} fluid/> Stake</Link></li>
                                    <li className="dash_menu_item"><Link to="#"><Image src={Delegate} fluid/> Delegate</Link></li>
                                    <li className="dash_menu_item"><Link to="#"><Image src={Validate} fluid/> Validate</Link></li>
                                </ul>
                            </div>
                            <div className="xp_netWork21">
                                <Link to="#" className="xp21">Xp.network 2021</Link>
                            </div>
                        </div>
                    </div>
                    <div className="main_conent_col">
                        <div className="main_conent">
                            <div className="tokkenid_list">
                                <p className="tokken_id" id="tokkenId">5ENeQkvLvFCg3KjHru6NAwN6esvbUxiS7CP2YicZYjQ4epBb</p>
                                <div className="tokken_icons">
                                    <Link to="#" className="copy_tokken"><Image src={TokkenCopy} fluid/></Link>
                                    <Link to="#" className="scan_tokken"><Image src={TokkenScan} fluid/></Link>
                                </div>
                            </div>
                            <div className="tokken_list_box">
                                <div className="tokken_list_title">
                                    <h3 className="secTitle">Tokens</h3>
                                    <p>Total: <span>USD 65,549.22</span></p>
                                </div>
                                <div className="tokken_boxes">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-6 col-12 mb-3">
                                            <div className="singleTokkenBox xpnetTokk">
                                                <div className="tokBoxTop">
                                                    <div className="tokken_logo">
                                                        <Image src={xpnet_logo} fluid/>
                                                        XPNET
                                                    </div>
                                                    <div className="tokBoxPri">
                                                        <p>$0.020</p>
                                                        <div className="tranding_persent">
                                                           <Image src={trending_up} fluid/> 16% 
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4>XPNET 15,000</h4>
                                                <p>USD 300</p>
                                            </div> 
                                        </div> 
                                        <div className="col-xl-4 col-lg-6 col-12 mb-3">
                                            <div className="singleTokkenBox ethTokk">
                                                <div className="tokBoxTop">
                                                    <div className="tokken_logo">
                                                        <Image src={Etherium_logo} fluid/>
                                                        Ethereum ETH
                                                    </div>
                                                    <div className="tokBoxPri">
                                                        <p>$3,938.14</p>
                                                        <div className="tranding_persent">
                                                           <Image src={trending_up} fluid/> 24% 
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4>ETH 25.20368</h4>
                                                <p>USD 9,407.68</p>
                                            </div> 
                                        </div> 
                                        <div className="col-xl-4 col-lg-6 col-12 mb-3">
                                            <div className="singleTokkenBox egldTokk">
                                                <div className="tokBoxTop">
                                                    <div className="tokken_logo">
                                                        <Image src={Elrond_logo} fluid/>
                                                        Elrond EGLD
                                                    </div>
                                                    <div className="tokBoxPri">
                                                        <p>$3,938.14</p>
                                                        <div className="tranding_persent">
                                                           <Image src={trending_up} fluid/> 24% 
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4>EGLD 25.20368</h4>
                                                <p>USD 9,407</p>
                                            </div> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div>
                            <div className="nfsTrans_boxes">
                                <div className="row">
                                    <div className="col-lg-6 mb-lg-0 mb-4">
                                        <div className="nfs_boxes">
                                            <div className="nfs_title">
                                                <h3 className="secTitle">Non-fungible tokens (NFTs)</h3>
                                                <Link to="#" className="view_all">View all 32 <Image src={viewAll} fluid/></Link>
                                            </div>
                                            <div className="nfs_boxes_container">
                                                <div className="row">
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo1} fluid/>HD Paint</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo2} fluid/>United Dallas</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo3} fluid/>Venice</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo4} fluid/>United Dallas</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo5} fluid/>Venice</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo6} fluid/>HD Gold</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo7} fluid/>United Dallas</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo8} fluid/>Venice</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
                                                        <div className="singNFSBox">
                                                            <div className="nfs_image"><Image src={nfx_logo9} fluid/>HD Gold</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="transa_boxes">
                                            <div className="transa_title">
                                                <h3 className="secTitle">Transactions</h3>
                                                <div className="transa_filter">
                                                    <span className="view_all filterTrans">Filter <Image src={Filter} fluid/></span>
                                                    <Link to="#" className="view_all">View all 32 <Image src={viewAll} fluid/></Link>
                                                </div>
                                            </div>
                                            <div class="trans_boxes_container">
                                                <div class="trans_table_box">
                                                    <table class="transTable table">
                                                        <tbody>
                                                            <tr>
                                                                <td><span class="sendCol"><Image src={traSend} fluid/></span></td>
                                                                <td class="tokkenCol">
                                                                    <p class="tranSenRecdId">Sent to sdfghjk56789dfghjk456789
                                                                        <span class="copy_tra_id"><Image src={copytra} fluid/></span>
                                                                    </p>
                                                                    <span class="tranDate">September 1st 2021, at 3:30 PM</span>
                                                                </td>
                                                                <td class="tranTokenNam">ETH 25.20368</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="sendCol"><Image src={traRec} fluid/></span></td>
                                                                <td class="tokkenCol">
                                                                    <p class="tranSenRecdId">Recieved from sdfghjk56789dfghjk
                                                                        <span class="copy_tra_id"><Image src={copytra} fluid/></span>
                                                                    </p>
                                                                    <span class="tranDate">September 1st 2021, at 3:30 PM</span>
                                                                </td>
                                                                <td class="tranTokenNam">ETH 25.20368</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="sendCol"><Image src={traRec} fluid/></span></td>
                                                                <td class="tokkenCol">
                                                                    <p class="tranSenRecdId">Recieved from sdfghjk56789dfghjk
                                                                        <span class="copy_tra_id"><Image src={copytra} fluid/></span>
                                                                    </p>
                                                                    <span class="tranDate">September 1st 2021, at 3:30 PM</span>
                                                                </td>
                                                                <td class="tranTokenNam">ETH 25.20368</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="sendCol"><Image src={traRec} fluid/></span></td>
                                                                <td class="tokkenCol">
                                                                    <p class="tranSenRecdId">Recieved from sdfghjk56789dfghjk
                                                                        <span class="copy_tra_id"><Image src={copytra} fluid/></span>
                                                                    </p>
                                                                    <span class="tranDate">September 1st 2021, at 3:30 PM</span>
                                                                </td>
                                                                <td class="tranTokenNam">ETH 25.20368</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="sendCol"><Image src={traSend} fluid/></span></td>
                                                                <td class="tokkenCol">
                                                                    <p class="tranSenRecdId">Sent to sdfghjk56789dfghjk456789
                                                                        <span class="copy_tra_id"><Image src={copytra} fluid/></span>
                                                                    </p>
                                                                    <span class="tranDate">September 1st 2021, at 3:30 PM</span>
                                                                </td>
                                                                <td class="tranTokenNam">ETH 25.20368</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="sendCol"><Image src={traSend} fluid/></span></td>
                                                                <td class="tokkenCol">
                                                                    <p class="tranSenRecdId">Sent to sdfghjk56789dfghjk456789
                                                                        <span class="copy_tra_id"><Image src={copytra} fluid/></span>
                                                                    </p>
                                                                    <span class="tranDate">September 1st 2021, at 3:30 PM</span>
                                                                </td>
                                                                <td class="tranTokenNam"><span class="nfts_logo"><Image src={traNfs} fluid/></span>HD Paint</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span class="sendCol"><Image src={traRec} fluid/></span></td>
                                                                <td class="tokkenCol">
                                                                    <p class="tranSenRecdId">Recieved from sdfghjk56789dfghjk
                                                                        <span class="copy_tra_id"><Image src={copytra} fluid/></span>
                                                                    </p>
                                                                    <span class="tranDate">September 1st 2021, at 3:30 PM</span>
                                                                </td>
                                                                <td class="tranTokenNam">ETH 25.20368</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </main>
	);
};
export default Volletdashboard;