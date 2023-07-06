import 'package:flutter/material.dart';


class SplashscreenWidget extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
    return Container(
      width: 428,
      height: 926,
      decoration: BoxDecoration(
        borderRadius : BorderRadius.only(
        topLeft: Radius.circular(20),
        topRight: Radius.circular(20),
        bottomLeft: Radius.circular(20),
        bottomRight: Radius.circular(20),
        ),
      color : Color.fromRGBO(255, 255, 255, 1),
  ),
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 0,
        left: -13,
        child: Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 12, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[
          Container(
      width: 103.5,
      height: 44,
      decoration: BoxDecoration(
          
  ),
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 16,
        left: 34.5,
        child: Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[
          Text('9:41', textAlign: TextAlign.left, style: TextStyle(
        color: Color.fromRGBO(0, 0, 0, 1),
        fontFamily: 'SF Pro Text',
        fontSize: 17,
        letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
        fontWeight: FontWeight.normal,
        height: 1
      ),), SizedBox(width : 2),
null,

        ],
      ),
    )
      ),
        ]
      )
    ), SizedBox(width : 0),
Container(
        width: 210,
        height: 44,
        decoration: BoxDecoration(
          
  )
      ), SizedBox(width : 0),
Container(
      width: 103.5,
      height: 44,
      decoration: BoxDecoration(
          
  ),
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 18,
        left: 14,
        child: Container(
      width: 74,
      height: 14,
      decoration: BoxDecoration(
          
  ),
      child: Stack(
        children: <Widget>[
          Positioned(
        top: 0,
        left: 0,
        child: Container(
      decoration: BoxDecoration(
          
  ),
      padding: EdgeInsets.symmetric(horizontal: 0, vertical: 0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        
        children: <Widget>[
          null, SizedBox(width : 3),
null, SizedBox(width : 3),
null,

        ],
      ),
    )
      ),
        ]
      )
    )
      ),Positioned(
        top: 6,
        left: 6,
        child: null
      ),
        ]
      )
    ),

        ],
      ),
    )
      ),Positioned(
        top: 341,
        left: 109,
        child: Container(
        width: 209,
        height: 244,
        decoration: BoxDecoration(
          image : DecorationImage(
          image: AssetImage('assets/images/Bubbletechlogo1300x30017.png'),
          fit: BoxFit.fitWidth
      ),
  )
      )
      ),
        ]
      )
    );
    }
}
        