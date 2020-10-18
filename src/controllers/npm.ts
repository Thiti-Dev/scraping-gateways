import { Request } from "express"

import { NextFunction, Request as ExpressRequest, Response } from 'express';
import { GET_FullHtmlResponseFromPath } from "./cores";

const BASE_PATH = 'https://www.npmjs.com/package/'
const NPM_WEEKLY_STATISTIC_REGEX_SET = new RegExp('(?<=p class="_9ba9a726 f4 tl flex-auto fw6 black-80 ma0 pr2 pb1">)(.*)(?=</p></div></div></div>)')


//@Internal Utilities Function
function getWeeklyDownloadFromHTMLBody(body:string):number|boolean{
    const extracted_weekly_download : RegExpMatchArray | null = body.match(NPM_WEEKLY_STATISTIC_REGEX_SET)
    if(extracted_weekly_download){
        return parseInt(extracted_weekly_download[1].replace(/,/g,''))
    }else{
        //not match at all => should've thrown an error
        return false
    }
}
// ────────────────────────────────────────────────────────────────────────────────


export const getRouteInformation = function(req:ExpressRequest,res:Response){
    res.status(200).json({success:true})
}

export const getPackageStatistic = async function(req:ExpressRequest,res:Response){
    const {module_name} = req.params
    const full_html_body = await GET_FullHtmlResponseFromPath(BASE_PATH+module_name)
    if(!full_html_body) res.status(400).json({success:false,message:`The module name ${module_name} isn't exist in the npm.js website`})
    const weekly_download = getWeeklyDownloadFromHTMLBody(full_html_body as string)
    res.status(200).json({success:true,inspected_module:module_name,weekly_download_count:weekly_download})
}