import React from 'react';
import './Before.css';
import statics from '../../images/statistics3.jpg';
import engineer from '../../images/engineer.jpg';
import physics from '../../images/probes3.jpg';

export default function Before() {
    return (
        <main className="content">
            <section className="before">
                <h2 className="before__text lobster">Before Coding</h2>
                <ul className="before__box">
                    <li className="before__item">
                        <img src={statics} className="before__item-img" alt="project" />
                        <div className="before__item-textbox">
                            <h3 className="before__item-title lobster">I was a statistical analyst.</h3>
                            <p>I worked at <a
                                href="https://hmc.pennstatehealth.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="before__item-link"
                            >Milton S. Hershey Medical Center</a> as a research intern.I compared the market share of melanoma cancer for vaious hospital. I developed data
                            cleaning code, built formatted data sets and developed R program to calculate age
                            adjusted cancer crude rate and rate ratio. I provided data and helpd build <a
                                    href="https://psulss.maps.arcgis.com/apps/Cascade/index.html?appid=0fed8fee47cd483b963f056a774b0467"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="before__item-link">
                                    story map on esri.com</a> regarding cancer in catchment area, PA.</p>
                        </div>

                    </li>
                    <li className="before__item">
                        <img src={engineer} className="before__item-img" alt="project" />
                        <div className="before__item-textbox">
                            <h3 className="before__item-title lobster">I was an engineer.</h3>
                            <p>I worked at <a
                                href="https://auo.com/en-global"
                                target="_blank"
                                rel="noreferrer"
                                className="before__item-link"
                            >AU Optronic Corporation</a> as a TFT LCD Panel design engineer.I developed panels based on customers’ requests, monitored panels’ performance and solved problems.
                             I worked with the design team and factories. I co-wrote a patent-<a
                                    href="https://patents.google.com/patent/US20110310032"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="before__item-link"
                                > Pixel array and display panel having the same.</a>
                            </p>
                        </div>

                    </li>
                    <li className="before__item">
                        <img src={physics} className="before__item-img" alt="project" />
                        <div className="before__item-textbox">
                            <h3 className="before__item-title lobster">I was a physics lover.</h3>
                            <p>I was a research assistant of applied physics at <a
                                href="http://nthu-en.site.nthu.edu.tw/"
                                target="_blank"
                                rel="noreferrer"
                                className="before__item-link"
                            >National Tsing Hua University</a> I simulated the best shape for the <a
                                href="https://patents.google.com/patent/US20070268016A1/en"
                                target="_blank"
                                rel="noreferrer"
                                className="before__item-link"
                            >SSTM</a> probe based on fundamental electromagnetism and finite element analysis.
                        I also produced the probe using chemical etching and focus iron Bean.
                            </p>
                        </div>

                    </li>

                </ul>
            </section>
        </main>
    )
}