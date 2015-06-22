//
//  Encoding.m
//  GithubBrowser
//
//  Created by Sean on 6/22/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#include "Encoding.h"
#include "RCTRootView.h"

@implementation Encoding

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(base64Encode: (NSString*) str callback:(RCTResponseSenderBlock) callback) {
  NSData *nsdata = [str dataUsingEncoding:NSUTF8StringEncoding];
  NSString *base64Encoded = [nsdata base64EncodedStringWithOptions:0];
  
  callback(@[base64Encoded]);
}

@end
