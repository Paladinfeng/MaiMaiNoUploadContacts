
;function getSearchURIComponent(keyword, cid, dist, limit, containMe, groups, rangeContact, rangeInApp)
{
    var url = '';
    var division = '?';
    if(keyword != null && keyword != '')
    {
        url = url + division + 'keyword=' + encodeURIComponent(keyword);
        division = '&';
    }
    
    if(cid != null && cid != '')
    {
        url = url + division + 'cid=' + encodeURIComponent(cid);
        division = '&';
    }
    
    if(dist != null && dist != '')
    {
        url = url + division + 'dist=' + encodeURIComponent(dist);
        division = '&';
    }
    
    if(limit != null && limit != '')
    {
        url = url + division + 'limit=' + encodeURIComponent(limit);
        division = '&';
    }
    
    if(containMe != null && containMe != '')
    {
        url = url + division + 'containMe=' + encodeURIComponent(containMe);
        division = '&';
    }
    
    if(groups != null && groups != '')
    {
        url = url + division + 'groups=' + encodeURIComponent(groups);
        division = '&';
    }
    
    if(rangeContact != null && rangeContact != '')
    {
        url = url + division + 'rangeContact=' + encodeURIComponent(rangeContact);
        division = '&';
    }
    
    if(rangeInApp != null && rangeInApp != '')
    {
        url = url + division + 'rangeInApp=' + encodeURIComponent(rangeInApp);
        division = '&';
    }
}


;function override_window_function() {
    window.console.log = function(argument) {
        loadSchemeToCallNativeFunction('maimainative://window/console?action=log&argument=' + encodeURIComponent(argument));
    }
}

;function creatMaiMaiNative()
{
    var object = {};
    
    //** native **//
    //
    object.close_native = function(beforeUnload, force)
    {
        if(beforeUnload == null)
        {
            beforeUnload = "";
        }
        beforeUnload = encodeURIComponent(beforeUnload);
        loadSchemeToCallNativeFunction('maimainative://native/close?hint=' + beforeUnload + '&force=' + force);
    };
    
    object.close_native_with_data = function(beforeUnload, force, data)
    {
        if(beforeUnload == null)
        {
            beforeUnload = "";
        }
        if(data == null)
        {
            data = "";
        }
        beforeUnload = encodeURIComponent(beforeUnload);
        data = encodeURIComponent(data);
        loadSchemeToCallNativeFunction('maimainative://native/close?hint=' + beforeUnload + '&force=' + force + '&data=' + data);
    };
    
    //
    object.alert = function(paramters)
    {
        paramters = encodeURIComponent(paramters);
        loadSchemeToCallNativeFunction('maimainative://native/alert?paramters='+paramters);
    };
    //
    object.toast = function(text)
    {
        text = encodeURIComponent(text);
        loadSchemeToCallNativeFunction('maimainative://native/toast?hint='+text);
    };
    
    object.native_popview_onbackkey = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/popview_onbackkey');
    };
    
    object.appMsg = function(parameter)
    {
        if(parameter != null && parameter != '')
        {
            parameter = encodeURIComponent(parameter);
            loadSchemeToCallNativeFunction('maimainative://native/appmessage?msg='+parameter);
        }
    };
    
    object.native_send_broadcast = function(action, data) {
        data = encodeURIComponent(data);
        loadSchemeToCallNativeFunction('maimainative://native/sendbroadcast?action=' + action + '&data=' + data);
    };
    
    object.native_show_progress_dialog = function(text)
    {
        if(text != null && text != '')
        {
            text = encodeURIComponent(text);
            loadSchemeToCallNativeFunction('maimainative://native/showprogress?hint='+text);
        }
    };
    
    object.native_dismiss_progress_dialog = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/dismissprogress');
    };
    
    object.native_share = function(type, parameter)
    {
        loadSchemeToCallNativeFunction('maimainative://native/share?type='+encodeURIComponent(type) + '&parameter='+encodeURIComponent(parameter));
    };
    
    object.native_share_v2 = function(type, parameter)
    {
        loadSchemeToCallNativeFunction('maimainative://native/share?type='+encodeURIComponent(type) + '&parameter='+encodeURIComponent(parameter));
    };
    
    object.native_share_gossip = function(type, parameter)
    {
        loadSchemeToCallNativeFunction('maimainative://native/share_gossip?type='+encodeURIComponent(type) + '&parameter='+encodeURIComponent(parameter));
    };
    
    object.toast_v2 = function(text, duration)
    {
        text = encodeURIComponent(text);
        loadSchemeToCallNativeFunction('maimainative://native/toast_v2?hint='+ text + '&duration=' + duration);
    };
    
    object.toast_v3 = function(text, duration, delay)
    {
        text = encodeURIComponent(text);
        loadSchemeToCallNativeFunction('maimainative://native/toast_v3?hint='+ text + '&delay=' + delay + '&duration=' + duration);
    };
    
    object.shareToWeiXin = function(turl)
    {
        loadSchemeToCallNativeFunction('maimainative://native/sharetoweixin?value='+encodeURIComponent(turl));
    };
    
    object.contact_share_view = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/contact_share_view');
    };
    
    object.show_notice_remind = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/show_notice_remind');
    };
    
    object.show_notice_remind_batch = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/show_notice_remind_batch');
    };
    
    object.native_put_share_image = function(imageData)
    {
        if(imageData == null)
        {
            imageData = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/put_share_image?image_data='+encodeURIComponent(imageData));
    }
    
    object.native_read_local_property = function(callback)
    {
        if(callback == null)
        {
            callback = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/read_local_property?callback='+encodeURIComponent(callback));
    };
    
    object.native_write_local_property = function(property)
    {
        if(property == null)
        {
            property = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/write_local_property?property='+encodeURIComponent(property));
    };
    
    object.native_check_zfb_account = function(callback)
    {
        if(callback == null)
        {
            callback = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/check_zfb_account?callback='+encodeURIComponent(callback));
    };
    
    object.native_check_zfb_version = function(callback)
    {
        if(callback == null)
        {
            callback = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/check_zfb_version?callback='+encodeURIComponent(callback));
    };
    
    object.native_zfb_pay = function(payinfo, callback)
    {
        loadSchemeToCallNativeFunction('maimainative://native/zfb_pay?payinfo=' + encodeURIComponent(payinfo) + '&callback='+encodeURIComponent(callback));
    };
    
    object.native_wx_pay = function(payinfo)
    {
        loadSchemeToCallNativeFunction('maimainative://native/wx_pay?payinfo=' + encodeURIComponent(payinfo));
    };
    
    object.native_wx_web = function(url)
    {
        loadSchemeToCallNativeFunction('maimainative://native/wx_web?url=' + encodeURIComponent(url));
    };
    
    object.native_save_image_and_open_wx = function(imageUrl, openTip)
    {
        loadSchemeToCallNativeFunction('maimainative://native/native_save_image_and_open_wx?imageUrl=' + encodeURIComponent(imageUrl) + '&openTip=' + encodeURIComponent(openTip));
    };
    
    object.native_open_bind_rect = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/native_open_bind_rect');
    };
    
    object.native_call_phone = function(phoneNumber) {
        loadSchemeToCallNativeFunction('maimainative://native/call_phone?phoneNumber=' + encodeURIComponent(phoneNumber));
    };
    
    object.native_send_email = function(email) {
        loadSchemeToCallNativeFunction('maimainative://native/send_email?email=' + encodeURIComponent(email));
    };
    
    object.native_show_avatar = function(avatar) {
        loadSchemeToCallNativeFunction('maimainative://native/show_avatar?avatar=' + encodeURIComponent(avatar));
    };
    
    object.native_open_new_webview = function(url, title) {
        if(!title) {
            title = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/open_new_webview?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title));
    };
    
    object.native_open_new_webview_with_property = function(url, property) {
        if(!property) {
            property = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/open_new_webview?url=' + encodeURIComponent(url) + '&property=' + encodeURIComponent(property));
    };
    
    object.native_open_new_webview = function (url, title, needTitleRightBtn, rightBtnText) {
        if (!title) {
            title = '';
        }
        if (!needTitleRightBtn) {
            needTitleRightBtn = '';
        }
        loadSchemeToCallNativeFunction(
                                       'maimainative://native/open_new_webview?url=' + encodeURIComponent(url) +
                                       '&title=' + encodeURIComponent(title) +
                                       '&needTitleRightBtn=' + encodeURIComponent(needTitleRightBtn) +
                                       '&rightBtnText=' + encodeURIComponent(rightBtnText)
                                       );
    };
    
    object.native_edit_avatar = function(url) {
        loadSchemeToCallNativeFunction('maimainative://native/edit_avatar?avatar=' + encodeURIComponent(url));
    };
    
    object.native_get_mycard_info = function(callback) {
        loadSchemeToCallNativeFunction('maimainative://native/get_mycard_info?callback=' + callback);
    };
    
    object.native_store_contactcard = function(cardJsonStr) {
        loadSchemeToCallNativeFunction('maimainative://native/store_contactcard?cardjson=' + encodeURIComponent(cardJsonStr));
    };
    
    object.native_show_tag_inputdialog = function(title, checkTitle, checked, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/show_tag_inputdialog?title=' + encodeURIComponent(title) + "&checktitle=" + encodeURIComponent(checkTitle) + "&checked=" + checked + "&callback=" + callback);
    };
    
    object.native_show_option_list = function(title, optionArrayJson, highLightOnCurrent, showCancelBtn, selectIndex, textAlignLeft, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/show_option_list?title=' + encodeURIComponent(title) + "&array=" +
                                       encodeURIComponent(optionArrayJson) + "&highLightOnCurrent=" + highLightOnCurrent
                                       + "&showCancelBtn=" + showCancelBtn + "&index=" + selectIndex + "&callback=" + callback);
    };
    
    object.native_send_sms = function(phoneNumber, content) {
        loadSchemeToCallNativeFunction('maimainative://native/send_sms?phoneNumber=' + encodeURIComponent(phoneNumber) + "&content=" + encodeURIComponent(content));
    };
    
    object.native_copy_text = function(text, hint) {
        if(!text) {
            text = '';
        }
        if(!hint) {
            hint = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/copy_text?text=' + encodeURIComponent(text) + '&hint=' + encodeURIComponent(hint));
    };
    
    //** chat **//
    //
    object.native_chat = function(mid,contact_ids)
    {
        if(mid)
        {
            mid = encodeURIComponent(mid);
            loadSchemeToCallNativeFunction('taoumaimai://chat?mid='+mid);
        }
        else if(contact_ids)
        {
            contact_ids = encodeURIComponent(contact_ids);
            loadSchemeToCallNativeFunction('taoumaimai://chat?id='+contact_ids);
        }
    };
    
    object.native_chat = function(mid,contact_ids,anonymousTalk,message,fromPhonebook)
    {
        if(!contact_ids) contact_ids = null;
        if(!anonymousTalk) anonymousTalk = null;
        if(!message) message = null;
        if(!fromPhonebook) fromPhonebook = false;
        
        if(mid)
        {
            mid = encodeURIComponent(mid);
            loadSchemeToCallNativeFunction('taoumaimai://chat?mid='+mid + '&anonymousTalk=' + anonymousTalk + '&fromPhonebook=' + fromPhonebook + '&message=' + message);
        }
        else if(contact_ids)
        {
            contact_ids = encodeURIComponent(contact_ids);
            loadSchemeToCallNativeFunction('taoumaimai://chat?id=' + contact_ids + '&anonymousTalk=' + anonymousTalk + '&fromPhonebook='+fromPhonebook + '&message=' + message);
        }
    };
    
    object.native_chat2 = function(json)
    {
        loadSchemeToCallNativeFunction('maimainative://native/chat?json=' + encodeURIComponent(json));
    };
    
    //** job **//
    //
    object.native_resume_update = function(jid)
    {
        if(jid)
        {
            jid = encodeURIComponent(jid);
            loadSchemeToCallNativeFunction('taoumaimai://resumeupdate?id='+jid);
        }
        else
        {
            loadSchemeToCallNativeFunction('taoumaimai://resumeupdate');
        }
    };
    
    object.native_resume_detail = function(mmid, jid)
    {
        if(mmid == null)
        {
            mmid = '';
        }
        if(jid == null)
        {
            jid = '';
        }
        
        loadSchemeToCallNativeFunction('taoumaimai://resumedetail?id='+encodeURIComponent(mmid) + '&jid=' + encodeURIComponent(jid));
    };
    
    //
    object.native_job_suggestion = function(jid)
    {
        if(jid)
        {
            jid = encodeURIComponent(jid);
            loadSchemeToCallNativeFunction('taoumaimai://jobsuggestion?id='+jid);
        }
    };
    
    //
    object.native_job_update = function(jid)
    {
        if(jid)
        {
            jid = encodeURIComponent(jid);
            loadSchemeToCallNativeFunction('taoumaimai://jobupdate?id='+jid+'&opentype=1'+'&prepare=1');
        }
    };
    
    //
    object.native_job_candidates = function(jid, srcType)
    {
        if(jid)
        {
            jid = encodeURIComponent(jid);
            srcType = encodeURIComponent(srcType);
            loadSchemeToCallNativeFunction('taoumaimai://persons?id='+jid+'&type='+srcType+'&workmode=3');
        }
    };
    
    //
    object.native_open_joblist = function(customTitle, customUrl, dist)
    {
        var url = 'taoumaimai://jobs?url='+encodeURIComponent(customUrl) + '&title='+encodeURIComponent(customTitle) + "&dist=" + dist;
        
        loadSchemeToCallNativeFunction(url);
    };
    
    //
    object.native_open_contactlist = function(title, api)
    {
        var url = 'taoumaimai://contacts?api='+encodeURIComponent(api) + '&title='+encodeURIComponent(title);
        
        loadSchemeToCallNativeFunction(url);
    };
    
    //** feed **//
    //
    object.native_main = function(hosttype, refresh)
    {
        if(hosttype) {
            hosttype = encodeURIComponent(hosttype);
        } else {
            hosttype = '';
        }
        
        if(refresh) {
            refresh = encodeURIComponent(refresh);
        } else {
            refresh = '';
        }
        
        loadSchemeToCallNativeFunction('taoumaimai://main?hosttype='+hosttype+'&refresh='+refresh);
    };
    
    object.native_feed_detail = function(fid)
    {
        if(fid)
        {
            fid = encodeURIComponent(fid);
            loadSchemeToCallNativeFunction('taoumaimai://feeddetail?id='+fid);
        }
    };
    
    //** gossip **//
    //
    object.native_gossip_detail = function(gid)
    {
        if(gid)
        {
            gid = encodeURIComponent(gid);
            loadSchemeToCallNativeFunction('taoumaimai://gossipdetail?id='+gid);
        }
    };
    
    //** search **//
    
    object.native_search_feeds = function(keyword)
    {
        var url = 'taoumaimai://searchfeeds?keyword=' + encodeURIComponent(keyword);
        
        loadSchemeToCallNativeFunction(url);
    };
    
    object.native_search_gossips = function(keyword)
    {
        var url = 'taoumaimai://searchgossips?keyword=' + encodeURIComponent(keyword) + '&type=7';
        
        loadSchemeToCallNativeFunction(url);
    };
    
    object.native_search_jobs = function(keyword)
    {
        var url = 'maimainative://native/searchjobs?keyword=' + encodeURIComponent(keyword);
        loadSchemeToCallNativeFunction(url);
    };
    
    object.native_search_company_jobs = function (cid, cname, keyword, extraParams)
    {
        var url = 'maimainative://native/searchjobs?keyword=' + encodeURIComponent(keyword) + '&cid=' + cid + '&cname=' + cname + '&extraParams=' + encodeURIComponent(extraParams);
        loadSchemeToCallNativeFunction(url);
    };
    
    object.native_search_contacts = function(keyword)
    {
        var url = 'maimainative://native/searchcontacts?keyword=' + encodeURIComponent(keyword);
        loadSchemeToCallNativeFunction(url);
    };
    
    object.native_search_contacts_with_dist = function(keyword, dist)
    {
        var url = 'maimainative://native/searchcontacts?keyword=' + encodeURIComponent(keyword) + '&dist=' + dist;
        loadSchemeToCallNativeFunction(url);
    };
    
    //** meeting **//
    object.native_meeting_update = function(meetingJson, callback)
    {
        if (meetingJson != null && meetingJson != '')
        {
            meetingJson = encodeURIComponent(meetingJson);
            callback = encodeURIComponent(callback);
            loadSchemeToCallNativeFunction('taoumaimai://updatemeeting?update=1&meetingjson=' + meetingJson + '&callback=' + callback);
        }
    };
    
    object.native_show_map_position = function(positionTitle, latitude, longitude)
    {
        if (latitude && longitude) {
            positionTitle = encodeURIComponent(positionTitle);
            latitude = encodeURIComponent(latitude);
            longitude = encodeURIComponent(longitude);
            loadSchemeToCallNativeFunction('taoumaimai://displayposition?title=' + positionTitle + '&latitude=' + latitude + '&longitude=' + longitude);
        }
    };
    
    object.native_meeting_publish = function(callback)
    {
        callback = encodeURIComponent(callback);
        loadSchemeToCallNativeFunction('taoumaimai://publishmeeting?update=0&callback=' + callback);
    };
    
    object.native_show_feed_list = function(title, api) {
        loadSchemeToCallNativeFunction('taoumaimai://feedlist?title=' + encodeURIComponent(title) + '&api=' + encodeURIComponent(api));
    };
    
    object.native_edit_myself_tag = function(callback) {
        loadSchemeToCallNativeFunction('taoumaimai://editmyselftag?callback=' + callback);
    };
    
    object.native_work_exp = function (id, company, position, startYear, endYear, description, userName, editable, callback) {
        if (editable) {
            loadSchemeToCallNativeFunction('taoumaimai://editworkexp?id=' + id + "&callback=" + callback);
        }
    };
    
    object.native_show_job_push_setting = function () {
        loadSchemeToCallNativeFunction('taoumaimai://jobpushsetting');
    };
    
    object.native_open_job_search = function () {
        loadSchemeToCallNativeFunction('taoumaimai://openjobsearch');
    };
    
    object.native_open_my_jobs = function () {
        loadSchemeToCallNativeFunction('taoumaimai://openmyjobs');
    };
    
    object.native_choose_job_spread_agents = function (jid, callback, pickedListJsonString) {
        loadSchemeToCallNativeFunction('maimainative://native/choosejobspreadagents?jid=' + jid + "&callback=" + callback+ "&picked=" + pickedListJsonString);
    };
    
    object.native_education_exp = function (id, school, department, degree, startYear, endYear, description, userName, editable, callback) {
        if (editable) {
            loadSchemeToCallNativeFunction('taoumaimai://editeduexp?id=' + id + "&callback=" + callback);
        }
    };
    
    object.native_update_myself_info = function(callback) {
        loadSchemeToCallNativeFunction('taoumaimai://updatemyselfinfo?callback=' + callback);
    };
    
    object.native_update_profile = function(callback) {
        loadSchemeToCallNativeFunction('taoumaimai://updateprofile?callback=' + callback);
    };
    
    object.native_edit_contact_card = function() {
        loadSchemeToCallNativeFunction('maimainative://native/editcontactcard');
    };
    
    object.native_show_juders = function(mmid) {
        loadSchemeToCallNativeFunction('taoumaimai://showjudgers?id=' + encodeURIComponent(mmid));
    };
    
    object.native_contact_block_setting = function(cardJson, conf, callback)
    {
        cardJson = encodeURIComponent(cardJson);
        conf = encodeURIComponent(conf);
        callback = encodeURIComponent(callback);
        
        loadSchemeToCallNativeFunction('maimainative://native/blockaction?card=' + cardJson + '&conf=' + conf + '&callback=' + callback);
    };
    
    object.native_set_account = function(callback) {
        loadSchemeToCallNativeFunction('taoumaimai://set_account?callback=' + callback);
    };
    
    object.native_change_friend_level = function(contactJsonStr, level, levelJsonStr, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/changefriendlevel?contactJsonStr=' + encodeURIComponent(contactJsonStr) + "&level=" + level +
                                       "&levelJsonStr=" + encodeURIComponent(levelJsonStr) + "&callback=" + callback);
    };
    
    object.native_add_friend = function(contactCardJson, buttonType, notifychange, accountFromSearch, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/add_friend?contactJsonStr=' + encodeURIComponent(contactCardJson) + "&buttonType=" + buttonType +
                                       "&notifychange=" + encodeURIComponent(notifychange) + "&accountFromSearch=" + encodeURIComponent(accountFromSearch));
    };
    
    object.native_refresh = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/refresh');
    };
    
    object.native_contact_share_contact = function(cardJson, msgJson)
    {
        cardJson = encodeURIComponent(cardJson);
        msgJson = encodeURIComponent(msgJson);
        loadSchemeToCallNativeFunction('maimainative://native/share_contact?card=' + cardJson + '&msg=' + msgJson);
    };
    object.native_contact_add_address = function(cardJson)
    {
        cardJson = encodeURIComponent(cardJson);
        loadSchemeToCallNativeFunction('maimainative://native/add_address?card=' + cardJson);
    };
    object.native_contact_add_v = function(cardJson, callback)
    {
        cardJson = encodeURIComponent(cardJson);
        callback = encodeURIComponent(callback);
        loadSchemeToCallNativeFunction('maimainative://native/add_v?card=' + cardJson + '&callback=' + callback);
    };
    
    object.native_show_inputpanel = function(sendBtnTitle, cacheKey, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/show_inputpanel?sendBtnTitle=' + encodeURIComponent(sendBtnTitle) +
                                       '&cachekey=' + cacheKey + '&callback=' + callback);
    };
    object.native_show_inputpanel = function(sendBtnTitle, cacheKey, callback, hint) {
        loadSchemeToCallNativeFunction('maimainative://native/show_inputpanel?sendBtnTitle=' + encodeURIComponent(sendBtnTitle) +
                                       '&cachekey=' + cacheKey + '&callback=' + callback + '&hint=' + encodeURIComponent(hint));
    };
    object.native_show_inputpanel_at_bottom = function(sendBtnTitle, cacheKey, callback, hint, show_input_bottom) {
        loadSchemeToCallNativeFunction('maimainative://native/native_show_inputpanel_at_bottom?sendBtnTitle=' + encodeURIComponent(sendBtnTitle) +
                                       '&cachekey=' + cacheKey + '&callback=' + callback + '&hint=' + encodeURIComponent(hint)+'&show_input_bottom='+show_input_bottom);
    };
    object.native_clear_input = function (cacheKey) {
        loadSchemeToCallNativeFunction('maimainative://native/native_clear_input?cacheKey=' + cacheKey);
    };
    
    object.native_accept_friend = function(cardJson, fromFace2Face) {
        loadSchemeToCallNativeFunction('maimainative://native/accept_friend?contactJsonStr=' + encodeURIComponent(cardJson) +
                                       '&fromFace2Face=' + fromFace2Face);
    };
    
    //** contact **//
    //
    object.native_contact_detail = function(mid)
    {
        if(mid)
        {
            mid = encodeURIComponent(mid);
            loadSchemeToCallNativeFunction('maimainative://native/connectiondetail?mmid='+mid);
        }
    };
    
    object.native_show_map_position_2 = function(city, address) {
        loadSchemeToCallNativeFunction('maimainative://native/showmapposition2?city=' + encodeURIComponent(city) +
                                       '&address=' + address);
    };
    
    object.native_i_want_judge = function() {
        loadSchemeToCallNativeFunction('maimainative://native/iwantjudge');
    };
    object.native_choose_vocation = function (choosed_json, callback, autoRequest) {
        if (autoRequest == null) {
            autoRequest = true;
        }
        loadSchemeToCallNativeFunction('maimainative://native/choosevocation?chooosed_json=' + choosed_json + '&callback=' + callback + '&autoRequest=' + autoRequest);
    };
    object.native_choose_vocation_open_url = function (choosed_json, openUrl) {
        loadSchemeToCallNativeFunction('maimainative://native/choosevocation_open_url?chooosed_json=' +encodeURIComponent(choosed_json) + '&openUrl=' + encodeURIComponent(openUrl));
    };
    
    object.native_choose_my_profession_major = function(callback, autoSaveModify) {
        loadSchemeToCallNativeFunction('maimainative://native/choose_my_profession_major?autoSaveModify=' + autoSaveModify + '&callback=' + callback);
    };
    
    object.native_modify_domain_skill = function() {
        loadSchemeToCallNativeFunction('maimainative://native/modify_domain_skill');
    };

    
    object.native_save_mycard_info = function(mycardInfo, broadcastIfChange) {
        loadSchemeToCallNativeFunction('maimainative://native/save_mycard_info?broadcastIfChange=' + broadcastIfChange + '&mycardInfo=' + encodeURIComponent(mycardInfo));
    };
    
    object.native_add_work_exp = function(showTips) {
        loadSchemeToCallNativeFunction('maimainative://native/add_work_exp?showTips=' + showTips);
    };
    
    object.native_add_work_exp_custom = function(showTips, json) {
        loadSchemeToCallNativeFunction('maimainative://native/add_work_exp?showTips=' + showTips + '&json=' + encodeURIComponent(json));
    };
    
    object.native_add_edu_exp = function(showTips) {
        loadSchemeToCallNativeFunction('maimainative://native/add_edu_exp?showTips=' + showTips);
    };
    
    object.native_add_edu_exp_custom = function(showTips, json) {
        loadSchemeToCallNativeFunction('maimainative://native/add_edu_exp?showTips=' + showTips + '&json=' + encodeURIComponent(json));
    };
    
    object.native_show_datepicker = function(format, formatTime, milliSince1970, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/show_datepicker?format=' + encodeURIComponent(format) + '&formatTime=' + encodeURIComponent(formatTime)
                                       + "&milliSince1970=" + milliSince1970 + "&callback=" + callback);
    };
    
    object.native_show_locationpicker = function(province, city, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/show_locationpicker?province=' + encodeURIComponent(province) + '&city=' + encodeURIComponent(city)
                                       + "&callback=" + callback);
    };
    
    object.native_select_company= function(company,callback) {
        loadSchemeToCallNativeFunction('maimainative://native/select_company?cname=' + encodeURIComponent(company) + "&callback=" + callback);
    };
    
    object.native_select_careerTitle = function(careerTitle, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/select_careerTitle?cname=' + encodeURIComponent(careerTitle) + "&callback=" + callback);
    };

    object.native_select_school = function(school, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/select_school?cname=' + encodeURIComponent(school) + "&callback=" + callback);
    };
    
    object.native_priority_changed = function () {
        loadSchemeToCallNativeFunction('maimainative://native/PriorityChanged');
    };
    
    object.native_complete_fr_infoV2 = function(cardjson, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/completefrinfo?contactJson=' + encodeURIComponent(cardjson) + '&callback=' + callback);
    };
    
    object.native_complete_real_profile = function(callback) {
        loadSchemeToCallNativeFunction('maimainative://native/completerealinfo?callback=' + callback);
    };
    
    object.native_complete_task = function(task_id, task_type, task_lv, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/completetask?taskid=' + encodeURIComponent(task_id) + '&tasktype=' + task_type + '&tasklv=' + task_lv + '&callback=' + callback);
    };
    
    object.go_feed = function () {
        object.native_main('1', 'true');
    };
    
    object.native_publish_feed_red_packet_info = function (json) {
        loadSchemeToCallNativeFunction('maimainative://native/publish_feed_red_packet_info?json=' + encodeURIComponent(json));
    };
    
    object.native_gossip_company_index2 = function (json) {
        loadSchemeToCallNativeFunction('maimainative://native/gossip_company_index?json=' + encodeURIComponent(json));
    };
    
    object.native_tools_task_list = function (serviceId, itemId, title) {
        loadSchemeToCallNativeFunction('maimainative://native/tools_task_list?serviceId=' + serviceId + '&itemId=' + itemId + '&title=' + title);
    };
    
    object.open_native_scan = function () {
        loadSchemeToCallNativeFunction('maimainative://native/scan_qrcode');
    };
    
    object.native_nearby_friend = function () {
        loadSchemeToCallNativeFunction('maimainative://native/nearby_friend');
    };
    
    object.native_upload_image = function (parameter, callback) {
        if(parameter) {
            parameter = encodeURIComponent(parameter);
        } else {
            parameter = encodeURIComponent('');
        }
        
        loadSchemeToCallNativeFunction('maimainative://native/upload_image?parameter='+parameter+'&callback='+callback);
    };
    object.native_show_spread_feed_dialog = function(jsonFeed,callback){
        loadSchemeToCallNativeFunction('maimainative://native/show_spread_feed_dialog?json=' + encodeURIComponent(jsonFeed) + '&callback=' + callback);
    };
    
    object.native_show_large_images = function(images, index){
        if(!images) {
            images = '';
        }
        loadSchemeToCallNativeFunction('maimainative://native/show_large_images?images=' + encodeURIComponent(images) + '&index=' + index);
    };
    
    object.native_complete_work_profile = function(callback) {
        loadSchemeToCallNativeFunction('maimainative://native/complete_work_profile?callback=' + encodeURIComponent(callback));
    };
    
    object.native_message_search_more = function(keyword, type, mid, title) {
        loadSchemeToCallNativeFunction('maimainative://native/message_search_more?keyword=' + encodeURIComponent(keyword) + "&type=" + type + "&mid=" + mid + "&title=" + encodeURIComponent(title));
    };
    
    object.native_start_chat = function(mid, jumpToDialogId) {
        loadSchemeToCallNativeFunction('maimainative://native/startchat?mid=' + mid + "&jumpToDialogId=" + jumpToDialogId);
    };
    
    object.native_local_search = function(keyword, maxMsg, maxDlg) {
        loadSchemeToCallNativeFunction('maimainative://native/local_search_result?keyword=' + encodeURIComponent(keyword) + '&maxMsg=' + maxMsg + '&maxDlg=' + maxDlg);
    };
    
    object.native_local_search_with_contacts = function(keyword, maxMsg, maxDlg, maxContact) {
        loadSchemeToCallNativeFunction('maimainative://native/local_search_result?keyword=' + encodeURIComponent(keyword) + '&maxMsg=' + maxMsg + '&maxDlg=' + maxDlg + '&maxContact=' + maxContact);
    };
    object.native_show_actionsheet_list = function(title, optionArrayJson, highLightOnCurrent, showCancelBtn, selectIndex, textAlignLeft, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_show_actionsheet_list?title=' + encodeURIComponent(title) + "&array=" +
                                       encodeURIComponent(optionArrayJson) + "&highLightOnCurrent=" + highLightOnCurrent
                                       + "&showCancelBtn=" + showCancelBtn + "&index=" + selectIndex + "&callback=" + callback);
    };
    object.native_complain = function (type, id, msgMMID) {
        loadSchemeToCallNativeFunction('maimainative://native/native_complain?type=' + type + '&id=' + id + '&msgMMID=' + msgMMID);
    };
    object.native_complain_with_titles = function (type, id, msgMMID, defaultTitles) {
        loadSchemeToCallNativeFunction('maimainative://native/native_complain_with_titles?type=' + type + '&id=' + id + '&msgMMID=' + msgMMID + '&defaultTitles=' + defaultTitles);
    };
    object.native_copy_text = function(content) {
        loadSchemeToCallNativeFunction('maimainative://native/native_copy_text?content=' + encodeURIComponent(content));
    };
    object.native_open_search_center = function(type) {
        loadSchemeToCallNativeFunction('maimainative://native/open_search_center?type=' + type);
    };
    
    object.native_open_dist1_center = function() {
        loadSchemeToCallNativeFunction('maimainative://native/open_dist1_center');
    };
    
    object.native_open_dist2_center = function() {
        loadSchemeToCallNativeFunction('maimainative://native/open_dist2_center');
    };
    
    object.native_open_job_center = function() {
        loadSchemeToCallNativeFunction('maimainative://native/open_job_center');
    };
    
    object.native_open_talent_center = function() {
        loadSchemeToCallNativeFunction('maimainative://native/open_talent_center');
    };
    
    object.native_open_meeting_center = function() {
        loadSchemeToCallNativeFunction('maimainative://native/open_meeting_center');
    };
    object.block_feed = function(fid) {
        loadSchemeToCallNativeFunction('maimainative://native/block_feed?fid='+fid);
    };
    object.show_dialog_bg = function(callback) {
        loadSchemeToCallNativeFunction('maimainative://native/show_dialog_bg');
    };
    object.hide_dialog_bg = function() {
        loadSchemeToCallNativeFunction('maimainative://native/hide_dialog_bg');
    };
    object.native_start_group_chat = function(mmids) {
        loadSchemeToCallNativeFunction('maimainative://native/native_start_group_chat?mmids=' + encodeURIComponent(mmids));
    };
    object.native_spread_job = function(taskJson) {
        loadSchemeToCallNativeFunction('maimainative://native/native_spread_job?taskJson=' + encodeURIComponent(taskJson));
    };
    object.native_get_cache = function(key, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_get_cache?key=' + encodeURIComponent(key) + "&callback=" + encodeURIComponent(callback));
    };
    object.native_put_cache = function(key, data) {
        loadSchemeToCallNativeFunction('maimainative://native/native_put_cache?key=' + encodeURIComponent(key) + "&data=" + encodeURIComponent(data));
    };
    object.native_choose_contacts = function(callback, params, pickedListJsonString) {
        loadSchemeToCallNativeFunction('maimainative://native/native_select_contacts?callback=' + encodeURIComponent(callback) + "&picked=" + encodeURIComponent(pickedListJsonString) + "&params=" + encodeURIComponent(params));
    };
    object.native_publish = function(params) {
        loadSchemeToCallNativeFunction('maimainative://native/native_publish?params=' + encodeURIComponent(params));
    };
    object.native_publish_topic = function(params) {
        loadSchemeToCallNativeFunction('maimainative://native/native_publish_topic?params=' + encodeURIComponent(params));
    };
    object.native_add_topic = function(params) {
        loadSchemeToCallNativeFunction('maimainative://native/native_add_topic?params=' + encodeURIComponent(params));
    };
    object.native_publish_exp = function(params) {
        loadSchemeToCallNativeFunction('maimainative://native/native_publish_exp?params=' + encodeURIComponent(params));
    };
    object.native_friends_filter = function(params) {
        loadSchemeToCallNativeFunction('maimainative://native/native_friends_filter?params=' + encodeURIComponent(params));
    };
    object.open_work_ring = function() {
        loadSchemeToCallNativeFunction('maimainative://native/open_work_ring');
    };
    object.open_setting = function() {
        loadSchemeToCallNativeFunction('maimainative://native/open_setting');
    };
    object.show_dot = function(tabTag, key) {
        loadSchemeToCallNativeFunction('maimainative://native/show_dot?tabTag=' + encodeURIComponent(tabTag) + '&key=' + encodeURIComponent(key));
    };
    object.show_dot_2 = function(tabTag, key, image) {
        loadSchemeToCallNativeFunction('maimainative://native/show_dot?tabTag=' + encodeURIComponent(tabTag) + '&key=' + encodeURIComponent(key) + '&image=' + encodeURIComponent(image));
    };
    object.hide_dot = function(tabTag, key) {
        loadSchemeToCallNativeFunction('maimainative://native/hide_dot?tabTag=' + encodeURIComponent(tabTag) + '&key=' + encodeURIComponent(key));
    };
    object.native_invite_user = function() {
        loadSchemeToCallNativeFunction('maimainative://native/invite_user');
    };
    object.native_handle_button_action = function(actionType, itemIndex, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_handle_button_action?actionType=' + encodeURIComponent(actionType) + '&itemIndex=' + encodeURIComponent(itemIndex) + '&callback=' + encodeURIComponent(callback));
    };
    object.native_save_service_phone_no = function(callback)
    {
        loadSchemeToCallNativeFunction('maimainative://native/save_service_phone_no?callback=' + encodeURIComponent(callback));
    };
    object.native_pub_job = function(callback)
    {
        loadSchemeToCallNativeFunction('maimainative://native/pub_job');
    }
    object.native_set_search_key = function(key, disable_action)
    {
        loadSchemeToCallNativeFunction('maimainative://native/set_search_key?key=' + encodeURIComponent(key) + '&disable_action=' + encodeURIComponent(disable_action));
    };
    object.native_live_video = function(lid, isAuthor)
    {
        loadSchemeToCallNativeFunction('maimainative://native/live_video?lid=' + encodeURIComponent(lid) + '&is_author=' + encodeURIComponent(isAuthor));
    };
    object.native_start_record = function(callback)
    {
        loadSchemeToCallNativeFunction('maimainative://native/native_start_record?callback=' + encodeURIComponent(callback));
    };
    object.native_stop_record = function(callback)
    {
        loadSchemeToCallNativeFunction('maimainative://native/native_stop_record?callback=' + encodeURIComponent(callback));
    };
    object.native_play_record = function(data)
    {
        loadSchemeToCallNativeFunction('maimainative://native/native_play_record?data=' + encodeURIComponent(data));
    };
    object.native_play_record_url = function(url)
    {
        loadSchemeToCallNativeFunction('maimainative://native/native_play_record_url?url=' + encodeURIComponent(url));
    };
    object.native_stop_play_record = function()
    {
        loadSchemeToCallNativeFunction('maimainative://native/native_stop_play_record');
    };
    object.native_open_live_center = function(data)
    {
        loadSchemeToCallNativeFunction('maimainative://native/open_live_center?data=' + encodeURIComponent(data));
    };
    object.native_open_browser = function () {
        loadSchemeToCallNativeFunction('maimainative://native/native_open_browser');
    };
    object.native_iap = function (params, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_iap?params=' + encodeURIComponent(params) + '&callback=' + encodeURIComponent(callback));
    };
    object.native_article_bottom = function (params) {
        loadSchemeToCallNativeFunction('maimainative://native/article_bottom?params=' + encodeURIComponent(params));
    };
    object.native_alipay = function (params) {
        loadSchemeToCallNativeFunction('maimainative://native/alipay?params=' + encodeURIComponent(params));
    };
    object.native_on_imei_read = function (callback) {
        loadSchemeToCallNativeFunction('maimainative://native/imei_read?callback=' + encodeURIComponent(callback));
    };
    object.native_on_location_read = function (callback) {
        loadSchemeToCallNativeFunction('maimainative://native/on_location_read?callback=' + encodeURIComponent(callback));
    };
    object.native_set_navigationbar = function (banner_trans, banner_color, banner_lightstyle) {
        loadSchemeToCallNativeFunction('maimainative://native/set_navigationbar?'+
                                       'banner_trans='+ encodeURIComponent(banner_trans) +
                                       '&banner_color=' + encodeURIComponent(banner_color) +
                                       '&banner_lightstyle=' + encodeURIComponent(banner_lightstyle));
    };
    
    object.native_set_navigationbar_v2 = function (banner_trans, banner_color, banner_lightstyle,banner_hidetitle) {
        loadSchemeToCallNativeFunction('maimainative://native/set_navigationbar?'+
                                       'banner_trans='+ encodeURIComponent(banner_trans) +
                                       '&banner_color=' + encodeURIComponent(banner_color) +
                                       '&banner_lightstyle=' + encodeURIComponent(banner_lightstyle) + '&banner_hidetitle=' + encodeURIComponent(banner_hidetitle));
    };
    object.native_fetch = function (callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_fetch?callback=' + encodeURIComponent(callback));
    };
    object.native_get_create_time = function (callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_get_create_time?callback=' + encodeURIComponent(callback));
    };
    object.native_log = function (jsonStr,upload) {
        loadSchemeToCallNativeFunction('maimainative://native/native_log?jsonStr=' + encodeURIComponent(jsonStr) +
                                       '&upload=' + encodeURIComponent(upload));
    };
    object.native_at_friend = function(callback)
    {
        loadSchemeToCallNativeFunction('maimainative://native/atuser?callback='+encodeURIComponent(callback));
    };
    object.native_screen_capture = function (params, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_screen_capture?position=' + encodeURIComponent(params) + '&callback=' + encodeURIComponent(callback));
    };
    object.native_ume_collection = function (id, label, params) {
        loadSchemeToCallNativeFunction('maimainative://native/ume_collection?id=' + encodeURIComponent(id) + '&label=' + encodeURIComponent(label) + '&params=' + encodeURIComponent(params));
    };
    object.loadSuccess_toJump = function (waitToShow, waitToEnable){
        loadSchemeToCallNativeFunction('maimainative://native/loadSuccess_toJump?waitToShow=' + encodeURIComponent(waitToShow) +
                                       '&waitToEnable=' + encodeURIComponent(waitToEnable));
    }
    
    object.native_loadDigFailed = function (){
        loadSchemeToCallNativeFunction('maimainative://native/native_loadDigFailed');
    }
    
    object.native_OpenSuccess = function (){
        loadSchemeToCallNativeFunction('maimainative://native/native_OpenSuccess');
    }
    object.native_play_audio_list = function (params, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_list?params=' + encodeURIComponent(params) + '&callback=' + encodeURIComponent(callback));
    };
    
    object.native_play_audio_item = function (params) {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_item?&params=' + encodeURIComponent(params));
    };
    object.native_play_audio_seekTo = function (params) {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_seekTo?params=' + encodeURIComponent(params));
    };
    object.native_play_audio_change_playMode = function (params) {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_change_playMode?params=' + encodeURIComponent(params));
    };
    object.native_play_audio_play = function () {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_play');
    };
    object.native_play_audio_pause = function () {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_pause');
    };
    object.native_play_audio_close = function () {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_close');
    };
    object.native_play_audio_setWebViewController = function () {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_setWebViewController');
    };
    object.native_play_audio_hide = function (hide) {
        loadSchemeToCallNativeFunction('maimainative://native/play_audio_hide?hide=' + encodeURIComponent(hide));
    };
    object.native_update_msg_dlg = function () {
        loadSchemeToCallNativeFunction('maimainative://native/update_msg_dlg');
    };
    object.native_clear_task_list_badge = function () {
        loadSchemeToCallNativeFunction('maimainative://native/clear_task_list_badge');
    };
    object.native_judge_Net = function (callback) {
    loadSchemeToCallNativeFunction('maimainative://native/judge_Net?'+ '&callback=' + encodeURIComponent(callback));
    };
    object.native_download_audioCache = function (params, callback){
        loadSchemeToCallNativeFunction('maimainative://native/download_audioCache?params=' + encodeURIComponent(params) + '&callback=' + encodeURIComponent(callback));
    }
    object.native_judge_audioCache = function (params, callback){
        loadSchemeToCallNativeFunction('maimainative://native/judge_audioCache?params=' + encodeURIComponent(params) + '&callback=' + encodeURIComponent(callback));
    }
    object.native_iap_restore = function (callback) {
        loadSchemeToCallNativeFunction('maimainative://native/native_iap_restore?callback=' + encodeURIComponent(callback));
    };
    object.native_is_support_schema = function (schema,callback) {
        loadSchemeToCallNativeFunction('maimainative://native/is_support_schema?target=' + encodeURIComponent(schema) + '&callback=' + encodeURIComponent(callback));
    };
    object.native_open_schema = function (schema,callback) {
        loadSchemeToCallNativeFunction('maimainative://native/open_schema?target=' + encodeURIComponent(schema) + '&callback=' + encodeURIComponent(callback));
    };
    object.native_play_video = function (params, callback) {
        loadSchemeToCallNativeFunction('maimainative://native/play_video?params=' + encodeURIComponent(params) + '&callback=' + encodeURIComponent(callback));
    };
    object.native_set_navigationbar_custom = function (params){
        loadSchemeToCallNativeFunction('maimainative://native/set_navigationbar_custom?params=' + encodeURIComponent(params));
    }
    return object;
};

override_window_function();
var MaiMai_Native = creatMaiMaiNative();
