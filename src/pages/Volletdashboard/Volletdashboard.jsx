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
    
    const Transactions_list = [
    {
      sent_img: traRec,
      sent_to_txt: "sdfghjk56789dfghjk456789",
      date: "September 1st 2021, at 3:30 PM",
      tranaction_type: "ETH",
      tranaction_amount: "25.20368",
      nonce: 1
    },
    {
      sent_img: traSend,
      sent_to_txt: "sdfghjk56789dfghjk456789",
      date: "September 1st 2021, at 3:30 PM",
      tranaction_type: "ETH",
      tranaction_amount: "25.20368",
      nonce: 2
    },
    {
      sent_img: traRec,
      sent_to_txt: "sdfghjk56789dfghjk456789",
      date: "September 1st 2021, at 3:30 PM",
      tranaction_type: "ETH",
      tranaction_amount: "25.20368",
      nonce: 3
    },
    {
      sent_img: traSend,
      sent_to_txt: "sdfghjk56789dfghjk456789",
      date: "September 1st 2021, at 3:30 PM",
      tranaction_type: "ETH",
      tranaction_amount: "25.20368",
      nonce: 4
    },
    {
      sent_img: traRec,
      sent_to_txt: "sdfghjk56789dfghjk456789",
      date: "September 1st 2021, at 3:30 PM",
      tranaction_type: "ETH",
      tranaction_amount: "25.20368",
      nonce: 5
    },
  ]
  
  const User_list = [
    {
      user_name: "Alice Derived",
	  nonce: 1
    },
	{
      user_name: "Gyaseen Abc",
	  nonce: 2
    },
	{
      user_name: "Gyaseen Abcd",
	  nonce: 3
    },
	{
      user_name: "Gyaseen Abcde",
	  nonce: 4
    },
	]
    const Tokens_list = [
    {
      logo_url: xpnet_logo,
	  logo_text: 'XPNET',
	  logo_sale: 0.020,
	  token_precent: 10,
	  token_list: 15000,
	  token_short: 'XPNET',
	  token_amount: 300,
	  nonce: 1
    },
	{
      logo_url: Etherium_logo,
	  logo_text: 'Ethereum ETH',
	  logo_sale: 3938.14,
	  token_precent: 24,
	  token_list: 15000,
	  token_amount: 300,
	  token_short: 'ETH',
	  nonce: 2
    },
	{
      logo_url: Elrond_logo,
	  logo_text: 'Elrond EGLD',
	  logo_sale: 3938.14,
	  token_precent: 24,
	  token_list: 15000,
	  token_amount: 300,
	  token_short: 'EGLD',
	  nonce: 3
    },
	]
	const NFT_list = [
		{
		  logo_nft: nfx_logo1,
		  logo_lable: 'HD Paint',
		  nonce: 1
		},
		{
		  logo_nft: nfx_logo2,
		  logo_lable: 'United Dallas',
		  nonce: 2
		},
		{
		  logo_nft: nfx_logo3,
		  logo_lable: 'Venice',
		  nonce: 3
		},
		{
		  logo_nft: nfx_logo4,
		  logo_lable: 'United Dallas',
		  nonce: 4
		},
		{
		  logo_nft: nfx_logo5,
		  logo_lable: 'Venice',
		  nonce: 5
		},
		{
		  logo_nft: nfx_logo6,
		  logo_lable: 'HD Gold',
		  nonce: 6
		},
		{
		  logo_nft: nfx_logo7,
		  logo_lable: 'Venice',
		  nonce: 7
		},
		{
		  logo_nft: nfx_logo8,
		  logo_lable: 'United Dallas',
		  nonce: 8
		},
		{
		  logo_nft: nfx_logo8,
		  logo_lable: 'HD Gold',
		  nonce: 9
		},
	]
	
	
    return (
    <main className="mainContainerArea">
            <div className="main_container">
                <div className="row">
                    <div className="contai_leftside_col">
                        <div className="contai_leftside">
                            <div className="leftSideSelect">
                                <select name="userlist" id="userlist">
                                    {User_list?.map((user, indexs) => (
									<option key={indexs} value="{user.user_name}">{user.user_name}</option>
                                    ))}
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
                                    <li className="dash_menu_item"><Link to="#"><Image src={Stake} fluid/> Stake <span className="comiSoonL">Coming Soon</span></Link></li>
                                    <li className="dash_menu_item"><Link to="#"><Image src={Delegate} fluid/> Delegate <span className="comiSoonL">Coming Soon</span></Link></li>
                                    <li className="dash_menu_item"><Link to="#"><Image src={Validate} fluid/> Validate <span className="comiSoonL">Coming Soon</span></Link></li>
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
                                <span className="copyAlert">Token ID- Copied</span>
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
										{Tokens_list?.map((token_i, index_i) => (
											<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12 mb-3" key={index_i}>
												<div className="singleTokkenBox xpnetTokk">
													<div className="tokBoxTop">
														<div className="tokken_logo">
															<Image src={token_i.logo_url} fluid/>
															{token_i.logo_text}
														</div>
														<div className="tokBoxPri">
															<p>${token_i.logo_sale}</p>
															<div className="tranding_persent">
															   <Image src={trending_up} fluid/> {token_i.token_precent}% 
															</div>
														</div>
													</div>
													<h4>{token_i.token_short} {token_i.token_list}</h4>
													<p>USD {token_i.token_amount}</p>
												</div> 
											</div>
										))}
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
                                                    
													{NFT_list?.map((ntfs_i, index_nt) => (
														<div className="col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6">
															<div className="singNFSBox">
																<div className="nfs_image"><Image src={ntfs_i.logo_nft} fluid/>{ntfs_i.logo_lable}</div>
															</div>
														</div>
                                                    ))}
																										
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
                                            <div className="trans_boxes_container">
                                                <div className="trans_table_box">
                                                    <table className="transTable table">
                                                        <tbody>
														{Transactions_list?.map((item, index) => (
														<tr key={index}>
                                                                <td><span className="sendCol"><Image src={item.sent_img} fluid/></span></td>
                                                                <td className="tokkenCol">
														            <Link to="#"><p className="tranSenRecdId">Sent to {item.sent_to_txt}</p></Link>
                                                                    <span className="tranDate">{item.date}</span>
                                                                </td>
                                                                <td className="tranTokenNam">{item.tranaction_type} 25.20368</td>
                                                            </tr>
														))}
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