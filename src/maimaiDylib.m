//  weibo: http://weibo.com/xiaoqing28
//  blog:  http://www.alonemonkey.com
//
//  maimaiDylib.m
//  maimaiDylib
//
//  Created by xuezhaofeng on 15/03/2018.
//  Copyright (c) 2018 xuezhaofeng. All rights reserved.
//


#import "maimaiDylib.h"
#import <CaptainHook/CaptainHook.h>
#import <UIKit/UIKit.h>
#import <Cycript/Cycript.h>

@interface NTAppDelegate : UIResponder

@property(retain, nonatomic) UIWindow *window;
@property(retain, nonatomic) id rootViewController;
@property(retain, nonatomic) UIStoryboard *myStoryboard;

+ (void)setRootTabControllerBelow:(id)arg1;
+ (void)setRootTabController;

@end

CHDeclareClass(AddressBookUploadViewController)

CHMethod0(void, AddressBookUploadViewController, setupViews) {
    UIApplication *app = [UIApplication sharedApplication];
    [[app.delegate class] setRootTabController];
}

CHConstructor {
    CHLoadLateClass(AddressBookUploadViewController);
    CHClassHook(0, AddressBookUploadViewController, setupViews);
}

