import Image from 'next/image'
import React from 'react'
import "../../app/styles/hotel.css"
const BoardCard = () => {
  return (
    <div>
         <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-5  col-lg-5'>
                                <div className='w-100' style={{ position: 'relative', width: "100%", height: "auto", aspectRatio: "16/9" }}>
                                    <Image src="/assets/image.jpg" alt='image' fill />
                                </div>
                                <div className='board-title'>Junior Suite</div>
                                <div className='board-small'>(355 sq.ft (33 sq.mt) | City View | King Bed)</div>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-7  col-lg-7'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <div className='board-title'>Room Only</div>
                                        <div className='board-small'>Non-refundable</div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <div className='board-title'>₹ 66,941</div>
                                            <div className='board-small'>Per Room</div>
                                        </div>
                                        <div>
                                            <div className="dropdown">
                                                <select className="number">
                                                    <option>1</option>
                                                    <option >2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <div className='board-title'>Room Only</div>
                                        <div className='board-small'>Non-refundable</div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <div className='board-title'>₹ 66,941</div>
                                            <div className='board-small'>Per Room</div>
                                        </div>
                                        <div>
                                            <div className="dropdown">
                                                <select className="number">
                                                    <option>1</option>
                                                    <option >2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <div className='board-title'>Room Only</div>
                                        <div className='board-small'>Non-refundable</div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-center gap-3'>
                                        <div>
                                            <div className='board-title'>₹ 66,941</div>
                                            <div className='board-small'>Per Room</div>
                                        </div>
                                        <div>
                                            <div className="dropdown">
                                                <select className="number">
                                                    <option>1</option>
                                                    <option >2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default BoardCard