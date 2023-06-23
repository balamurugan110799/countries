import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { data } from "../components/data/data";
import $ from 'jquery';
function Country() {
    const [values, setValues] = useState(data)
    const [search, setSearch] = useState()
    const [regionState, useregionState] = useState()
    const params = useParams()
    const userId = params.userId;
    const [searchParams, setSearchParams] = useSearchParams();
    const [region, setRegion] = useState([
        {
            id: 0,
            region: "Africa",
            status: false
        },
        {
            id: 1,
            region: "Americas",
            status: false
        },
        {
            id: 2,
            region: "Asia",
            status: false
        },
        {
            id: 3,
            region: "Europe",
            status: false
        },
        {
            id: 4,
            region: "Oceania",
            status: false
        },
    ])
    const [tooggleState, setToggleState] = useState(false)
    const [clearState, setClearState] = useState(false)
    const [currentRegionState, setCurrentRegionState] = useState()


    const handleClick = (v) => {
        console.log(v)
        const regions = v;

        setSearchParams({ filter: v.region })
        setToggleState(!tooggleState)

        setClearState(true)
        let obj = []
        data.forEach((el) => {
            if (el.region === v.region) {
                console.log(el)
                obj.push(el)
            }

        })
        console.log(obj)
        setValues(obj)
        // useregionState(v)
        setCurrentRegionState(v)
        console.log(searchParams.get('filter'))
    }

    const clearClick = () => {
        setSearchParams({})
        setValues(data)
        setClearState(false)
    }

    const handlechange = (e) => {
        setSearch(e.target.value)
        console.log(search === undefined)
        const filtered = values.filter((v) =>
            v.name.toLowerCase().includes(typeof search === 'string' ? search.toLowerCase() : "")
        );
        setValues(filtered)
        if (e.target.value?.length === 0) {
            console.log("Hello Bala")
            setValues(data)
        }


    }

    const Toogle = () => {
        setClearState(true)
        $(".slideDown").slideDown();
        // console.log(region.region)
        var state = !tooggleState
        setToggleState(state)
        // if (state === true) {
        //     $(".region").slideUp();
        // } else {
        //     $(".region").slideDown();
        // }

    }

    useEffect(() => {

        $(document).ready(function(){
            // $(".toogle").click(function(){
            //   $(".region").slideUp();
            // });
            $(".toogle").click(function(){
              $(".region").slideDown();
            });
          });

    }, [])



    return (
        <div>
            <div className="py-8 shadow-2xl">


                <div className="container mx-auto">

                    <div className=''>
                        <p className="text-[32px] text-left">
                            Where in the world?
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-16">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex">
                            <input type="" className="border py-2 px-4" onChange={(e) => handlechange(e)} placeholder="Country" />
                        </div>
                    </div>
                    <div className="flex justify-end mb-16">
                        {clearState === true ? <div onClick={() => clearClick({})} className="py-4 cursor-pointer my-4 btn1  px-16 shadow-2xl z-0">
                            {currentRegionState?.region}
                        </div> : null}

                        <div className="block">
                            <div className="">



                                <div onClick={() => Toogle()} className="py-4 toogle cursor-pointer my-4 mb-1 btn1  px-16 shadow-2xl z-0">
                                    Filter By Region
                                </div>

                               
                            </div>
                            {tooggleState === true ? <div>

                                <div className="relative  region origin-center w-[100%] ">
                                    <div className="absolute z-10 right-0  cursor-pointer bg-off-white shadow-2xl w-[100%]">
                                        {region?.map((v, i) => {
                                            return (
                                                <div key={i} onClick={() => handleClick(v)} className="py-2 hover:bg-[#ccc]   px-16 hover:bg-white w-[100%] z-10 bg-white">
                                                    <div className="cursor-pointer w-[100%]" >{v.region}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div> : null}
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-4 gap-16">
                    {values?.map((v, i) => {
                        return (
                            <div key={i} className="shadow-2xl">
                                <div >

                                    <img src={v?.flags.svg} alt={v?.name} className="h-[200px] object-cover rounded-t-lg" />
                                </div>
                                <div className="py-6 pb-3 px-4 text-left">
                                    {v?.name}
                                </div>

                                <div className="px-4 pb-10">
                                    <p className="text-left"><span>Population</span> : {v?.population}</p>
                                    <p className="text-left"><span>Region</span> : {v?.region}</p>
                                    <p className="text-left"><span>Capital</span> : {v?.capital}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>





        </div>
    )
}

export default Country