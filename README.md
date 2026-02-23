<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        :root {
            --bg: #0a1f12;
            --bg2: #0f2f1f;
            --green: #39ff14;
            --green2: #1a8c3a;
            --green3: #0d4a1e;
            --orange: #ff8c00;
            --orange2: #ffb347;
            --amber: #ffd700;
            --dark: #050f08;
            --beige: #c8b89a;
            --brown: #3d2b1f;
            --red: #ff3030;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            image-rendering: pixelated;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background: var(--bg);
            font-family: 'Press Start 2P', monospace;
            color: var(--green);
            overflow-x: hidden;
        }

        body::after {
            content: '';
            position: fixed;
            inset: 0;
            background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.07) 2px, rgba(0, 0, 0, 0.07) 4px);
            pointer-events: none;
            z-index: 9999;
        }

        @keyframes flicker {

            0%,
            100% {
                opacity: 1
            }

            96% {
                opacity: 1
            }

            97% {
                opacity: .93
            }

            98% {
                opacity: 1
            }

            99% {
                opacity: .96
            }
        }

        body {
            animation: flicker 5s infinite;
        }

        #matrix {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 0;
            opacity: .15;
            pointer-events: none;
        }

        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: var(--dark);
            border-bottom: 4px solid var(--green2);
            padding: 12px 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 20px rgba(57, 255, 20, .3);
        }

        .nav-logo {
            font-size: 10px;
            color: var(--orange);
            text-shadow: 0 0 8px var(--orange);
        }

        .nav-links {
            display: flex;
            gap: 24px;
        }

        .nav-links a {
            font-size: 8px;
            color: var(--green);
            text-decoration: none;
            padding: 4px 8px;
            border: 2px solid transparent;
        }

        .nav-links a:hover {
            border: 2px solid var(--green);
            background: var(--green3);
            color: var(--amber);
            transform: translate(-2px, -2px);
            box-shadow: 2px 2px 0 var(--green2);
        }

        /* ===== HERO ===== */
        #hero {
            position: relative;
            z-index: 1;
            height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 60px;
            overflow: hidden;
        }

        #hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(57, 255, 20, .03) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, .03) 1px, transparent 1px);
            background-size: 8px 8px;
            pointer-events: none;
        }

        .hero-ground {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: var(--brown);
            border-top: 4px solid var(--green2);
        }

        .hero-ground::before {
            content: '';
            position: absolute;
            top: -8px;
            left: 0;
            right: 0;
            height: 8px;
            background: repeating-linear-gradient(90deg, var(--green2) 0, var(--green2) 8px, transparent 8px, transparent 16px);
        }

        .scene {
            position: relative;
            width: 100%;
            max-width: 960px;
            height: 440px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            padding: 0 40px;
        }

        /* CRT */
        .computer {
            position: relative;
            flex-shrink: 0;
            margin-bottom: 40px;
        }

        .crt-body {
            width: 180px;
            height: 160px;
            background: var(--beige);
            border: 6px solid #8a7a6a;
            box-shadow: inset -6px -6px 0 #6a5a4a, inset 6px 6px 0 #e8d8c0, 4px 4px 0 #3d2b1f;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .crt-screen {
            width: 130px;
            height: 100px;
            background: #000;
            border: 4px solid #3d2b1f;
            overflow: hidden;
            position: relative;
        }

        .screen-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 6px;
            padding: 4px;
            position: absolute;
            top: 0;
            left: 0;
        }

        .sc-error {
            background: #1a0000;
        }

        .sc-error .err-txt {
            color: var(--red);
            text-align: center;
            line-height: 1.8;
            animation: errfl .3s infinite;
        }

        @keyframes errfl {

            0%,
            100% {
                opacity: 1
            }

            50% {
                opacity: .65
            }
        }

        .warn-bar {
            width: 100%;
            height: 8px;
            margin: 2px 0;
            background: repeating-linear-gradient(90deg, var(--red) 0, var(--red) 4px, #000 4px, #000 8px);
        }

        .sc-fixing {
            background: #000a00;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .sc-fixing .fix-txt {
            color: var(--amber);
            font-size: 6px;
            text-align: center;
            line-height: 2;
        }

        .progress-bar {
            width: 80%;
            height: 10px;
            background: #001008;
            border: 2px solid var(--green2);
            margin-top: 6px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: var(--green);
            width: 0;
            transition: width 0.05s;
        }

        .sc-fixed {
            background: #001500;
        }

        .sc-fixed .ok-txt {
            color: var(--green);
            font-size: 7px;
            text-align: center;
            line-height: 2;
            text-shadow: 0 0 6px var(--green);
            animation: pulse 1s infinite;
        }

        @keyframes pulse {

            0%,
            100% {
                opacity: 1
            }

            50% {
                opacity: .7
            }
        }

        .sc-fixed .ai-badge {
            color: var(--amber);
            font-size: 5px;
            margin-top: 4px;
            text-shadow: 0 0 4px var(--orange);
        }

        .crt-base {
            width: 100px;
            height: 20px;
            background: var(--beige);
            margin: 0 auto;
            border: 4px solid #8a7a6a;
            box-shadow: inset -3px -3px 0 #6a5a4a, inset 3px 3px 0 #e8d8c0, 2px 2px 0 #3d2b1f;
        }

        .crt-foot {
            width: 130px;
            height: 12px;
            background: #8a7a6a;
            margin: 0 auto;
            box-shadow: 2px 2px 0 #3d2b1f;
        }

        .pc-glow {
            position: absolute;
            bottom: -20px;
            right: 10px;
            width: 160px;
            height: 20px;
            background: radial-gradient(ellipse, rgba(255, 140, 0, .6) 0%, transparent 70%);
            border-radius: 50%;
        }

        .desk {
            position: absolute;
            bottom: 40px;
            right: 20px;
            width: 240px;
            height: 20px;
            background: #5a3e2b;
            border-top: 4px solid #8a6a4a;
            box-shadow: 0 4px 0 #3d2b1f;
        }

        .coffee-mug {
            position: absolute;
            bottom: 60px;
            right: 28px;
            width: 16px;
            height: 16px;
            background: #8a6a4a;
            border: 2px solid #3d2b1f;
        }

        .coffee-mug::after {
            content: '';
            position: absolute;
            top: -6px;
            left: 2px;
            width: 4px;
            height: 6px;
            background: rgba(150, 220, 255, .5);
            animation: steam 1.5s infinite;
        }

        @keyframes steam {

            0%,
            100% {
                transform: translateY(0) scaleX(1);
                opacity: .8
            }

            50% {
                transform: translateY(-5px) scaleX(.4);
                opacity: 0
            }
        }

        /* ===== CHARACTER ===== */
        #char-container {
            position: absolute;
            bottom: 60px;
            left: 0;
            will-change: transform;
        }

        .char-sprite {
            width: 40px;
            height: 56px;
            position: relative;
        }

        .char-head {
            position: absolute;
            top: 0;
            left: 8px;
            width: 24px;
            height: 20px;
            background: #f5c886;
            border: 2px solid #3d2b1f;
        }

        .char-head::before {
            content: '';
            position: absolute;
            top: -4px;
            left: -2px;
            width: 28px;
            height: 8px;
            background: #4a5568;
            border: 2px solid #2d3748;
        }

        .char-eye1,
        .char-eye2 {
            position: absolute;
            top: 8px;
            width: 4px;
            height: 4px;
            background: #1a1a1a;
        }

        .char-eye1 {
            left: 4px;
        }

        .char-eye2 {
            right: 4px;
        }

        .char-mouth {
            position: absolute;
            bottom: 3px;
            left: 6px;
            width: 12px;
            height: 2px;
            background: #c47a45;
        }

        .char-body {
            position: absolute;
            top: 18px;
            left: 4px;
            width: 32px;
            height: 20px;
            background: #4a5568;
            border: 2px solid #2d3748;
        }

        .char-body::after {
            content: '';
            position: absolute;
            top: 4px;
            left: 6px;
            width: 10px;
            height: 8px;
            background: #ff8c00;
            border: 1px solid #3d2b1f;
        }

        .char-leg1,
        .char-leg2 {
            position: absolute;
            bottom: 6px;
            width: 12px;
            height: 12px;
            background: #2d3748;
            border: 2px solid #1a202c;
        }

        .char-leg1 {
            left: 6px;
        }

        .char-leg2 {
            left: 20px;
        }

        .char-shoe1,
        .char-shoe2 {
            position: absolute;
            width: 14px;
            height: 6px;
            background: var(--orange);
            border: 2px solid #3d2b1f;
        }

        .char-shoe1 {
            bottom: 0;
            left: 4px;
        }

        .char-shoe2 {
            bottom: 0;
            left: 18px;
        }

        /* arm holding logos */
        .char-arm-logos {
            position: absolute;
            top: 20px;
            right: -44px;
            display: flex;
            gap: 3px;
            transform-origin: left center;
        }

        /* throwing arm (hidden by default) */
        .char-arm-throw {
            position: absolute;
            top: 14px;
            right: -8px;
            width: 24px;
            height: 6px;
            background: #4a5568;
            border: 2px solid #2d3748;
            transform-origin: left center;
            display: none;
        }

        /* Pixel logos */
        .pixel-logo {
            width: 20px;
            height: 20px;
            border: 2px solid #3d2b1f;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4px;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
        }

        .logo-claude {
            background: #cc6600;
            color: #fff;
        }

        .logo-claude::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 5px;
            height: 13px;
            background: #ff9933;
        }

        .logo-claude::after {
            content: 'AI';
            font-family: 'Press Start 2P';
            font-size: 4px;
            color: #fff;
            position: absolute;
            right: 2px;
        }

        .logo-openai {
            background: #10a37f;
        }

        .logo-openai::after {
            content: '⬡';
            font-size: 11px;
            color: #fff;
        }

        /* Flying logos (JS controlled) */
        .flying-logo {
            position: absolute;
            will-change: transform;
            z-index: 20;
            display: none;
        }

        /* Chat bubble */
        #chat-bubble {
            position: absolute;
            background: #fff;
            border: 4px solid #000;
            padding: 8px 12px;
            font-size: 9px;
            color: #000;
            white-space: nowrap;
            display: none;
            z-index: 30;
            box-shadow: 4px 4px 0 #000;
        }

        #chat-bubble::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 12px;
            width: 12px;
            height: 12px;
            background: #fff;
            border-right: 4px solid #000;
            border-bottom: 4px solid #000;
            clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        /* Sparks container */
        #sparks-container {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 25;
        }

        /* Hero text */
        .hero-text {
            position: absolute;
            top: 90px;
            left: 40px;
            z-index: 10;
        }

        @keyframes glitchanim {

            0%,
            94%,
            100% {
                transform: translate(0)
            }

            95% {
                transform: translate(-3px, 1px);
                filter: hue-rotate(90deg)
            }

            96% {
                transform: translate(3px, -1px)
            }

            97% {
                transform: translate(0)
            }
        }

        .glitch {
            animation: glitchanim 6s infinite;
        }

        .hero-title {
            font-size: 22px;
            color: var(--orange);
            text-shadow: 0 0 10px var(--orange), 4px 4px 0 var(--brown);
            line-height: 2;
        }

        .hero-sub {
            font-size: 10px;
            color: var(--green);
            margin-top: 16px;
            text-shadow: 0 0 6px var(--green);
            line-height: 2.4;
        }

        .hero-sub span {
            color: var(--amber);
        }

        .blink {
            animation: blinkanim 1s steps(1) infinite;
        }

        @keyframes blinkanim {

            0%,
            50% {
                opacity: 1
            }

            51%,
            100% {
                opacity: 0
            }
        }

        .start-btn {
            display: inline-block;
            margin-top: 24px;
            padding: 12px 20px;
            background: var(--green2);
            color: #fff;
            font-size: 10px;
            border: 4px solid var(--green);
            box-shadow: 4px 4px 0 var(--green3);
            text-decoration: none;
        }

        .start-btn:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0 var(--green3);
            background: var(--green);
            color: var(--dark);
        }

        .scroll-hint {
            position: absolute;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 7px;
            color: var(--green2);
            text-align: center;
            animation: scrollbob 1s steps(3) infinite;
        }

        @keyframes scrollbob {
            0% {
                transform: translateX(-50%) translateY(0)
            }

            100% {
                transform: translateX(-50%) translateY(6px)
            }
        }

        /* ===== SECTIONS ===== */
        section {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 40px;
        }

        .section-title {
            font-size: 12px;
            color: var(--orange);
            margin-bottom: 32px;
            text-shadow: 0 0 8px var(--orange), 3px 3px 0 var(--brown);
            border-left: 8px solid var(--orange);
            padding-left: 16px;
        }

        #about {
            background: var(--dark);
        }

        .terminal-window {
            width: 100%;
            border: 4px solid var(--green2);
            box-shadow: 0 0 20px rgba(57, 255, 20, .2), 6px 6px 0 #000;
        }

        .terminal-bar {
            background: var(--green2);
            padding: 6px 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .t-dot {
            width: 10px;
            height: 10px;
            background: var(--dark);
            border: 2px solid var(--green);
        }

        .terminal-title {
            font-size: 7px;
            color: var(--dark);
            margin-left: 8px;
        }

        .terminal-body {
            background: #000d05;
            padding: 20px;
            font-size: 8px;
            line-height: 2.2;
            color: var(--green);
        }

        .t-prompt {
            color: var(--orange);
        }

        .t-comment {
            color: #2a6640;
        }

        .t-string {
            color: var(--amber);
        }

        .typewriter {
            overflow: hidden;
            border-right: 2px solid var(--green);
            white-space: nowrap;
            animation: typing 3s steps(40, end) 0.5s both, blinkcursor .75s step-end infinite alternate;
        }

        @keyframes typing {
            from {
                width: 0
            }

            to {
                width: 100%
            }
        }

        @keyframes blinkcursor {
            from {
                border-color: var(--green)
            }

            to {
                border-color: transparent
            }
        }

        .stat-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 8px 0;
            font-size: 6px;
        }

        .stat-label {
            width: 80px;
            color: var(--orange);
        }

        .stat-track {
            flex: 1;
            height: 12px;
            background: #001008;
            border: 2px solid var(--green2);
        }

        .stat-fill {
            height: 100%;
            background: repeating-linear-gradient(90deg, var(--green) 0, var(--green) 6px, var(--green2) 6px, var(--green2) 8px);
            animation: fillAnim 2s ease-out forwards;
            width: 0;
        }

        @keyframes fillAnim {
            to {
                width: var(--w)
            }
        }

        .stat-val {
            width: 30px;
            text-align: right;
            color: var(--amber);
        }

        #projects {
            background: var(--bg2);
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            width: 100%;
        }

        .project-card {
            background: var(--bg);
            border: 4px solid var(--green2);
            padding: 16px;
            position: relative;
            box-shadow: 4px 4px 0 #000;
            cursor: pointer;
        }

        .project-card:hover {
            transform: translate(-4px, -4px);
            box-shadow: 8px 8px 0 rgba(255, 140, 0, .5);
            border-color: var(--orange);
        }

        .project-card:hover .card-icon {
            animation: bounce .3s steps(2) infinite;
        }

        @keyframes bounce {
            0% {
                transform: translateY(0)
            }

            100% {
                transform: translateY(-4px)
            }
        }

        .card-icon {
            font-size: 32px;
            margin-bottom: 8px;
            display: block;
        }

        .card-label {
            position: absolute;
            top: 8px;
            right: 8px;
            font-size: 5px;
            background: var(--green2);
            color: var(--dark);
            padding: 2px 4px;
        }

        .card-title {
            font-size: 7px;
            color: var(--orange);
            margin-bottom: 8px;
        }

        .card-desc {
            font-size: 6px;
            color: var(--beige);
            line-height: 1.8;
        }

        .card-tags {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .tag {
            font-size: 5px;
            padding: 2px 6px;
            background: var(--green3);
            border: 1px solid var(--green2);
            color: var(--green);
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: -4px;
            left: 20%;
            width: 60%;
            height: 8px;
            background: var(--green2);
            border-top: 4px solid var(--green);
        }

        .project-card:hover::before {
            background: var(--orange);
            border-color: var(--orange2);
        }

        #contact {
            background: var(--dark);
        }

        .social-row {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .social-btn {
            padding: 8px 12px;
            font-size: 7px;
            background: var(--bg);
            color: var(--green);
            border: 3px solid var(--green2);
            text-decoration: none;
            box-shadow: 3px 3px 0 #000;
        }

        .social-btn:hover {
            transform: translate(-2px, -2px);
            box-shadow: 5px 5px 0 rgba(57, 255, 20, .4);
            color: var(--amber);
            border-color: var(--orange);
        }

        footer {
            background: var(--dark);
            border-top: 4px solid var(--green2);
            padding: 20px 40px;
            text-align: center;
            font-size: 7px;
            color: var(--green2);
            position: relative;
            z-index: 1;
        }

        footer span {
            color: var(--orange);
        }
    </style>
</head>

<body>
    <canvas id="matrix"></canvas>

    <nav>
        <div class="nav-logo">GOPAL POKHREL</div>
    </nav>

    <section id="hero">
        <div class="hero-text glitch">
            <div class="hero-title">HI, I'M<br>GOPAL POKHREL</div>
            <div class="hero-sub">
                Software Engineer<br>
                <span>Bug Fixer</span> (with AI™)<br>
                Professional <span>Ctrl+Z</span> Enjoyer<br><br>
                STATUS: <span id="statusText">CAFFEINATED</span><span class="blink">█</span>
            </div>
            <a href="#about" class="start-btn">▶ PRESS START</a>
        </div>

        <div class="scene" id="scene">
            <div class="desk">
                <div class="coffee-mug"></div>
            </div>

            <!-- Computer -->
            <div class="computer" id="computer">
                <div class="crt-body">
                    <div class="crt-screen">
                        <!-- Error screen -->
                        <div class="screen-content sc-error" id="sc-error">
                            <div class="warn-bar"></div>
                            <div class="err-txt">!! SYS ERR !!<br>BRAIN.EXE<br>NOT FOUND<br>0xDEADBEEF</div>
                            <div class="warn-bar"></div>
                        </div>
                        <!-- Fixing screen -->
                        <div class="screen-content sc-fixing" id="sc-fixing" style="display:none;">
                            <div class="fix-txt">PATCHING...<br>LOADING AI</div>
                            <div class="progress-bar">
                                <div class="progress-fill" id="progFill"></div>
                            </div>
                        </div>
                        <!-- Fixed screen -->
                        <div class="screen-content sc-fixed" id="sc-fixed" style="display:none;">
                            <div class="ok-txt">✓ BUILD OK!<br>✓ FIXED!<br>100% AI</div>
                            <div class="ai-badge">⚡ AI POWERED</div>
                        </div>
                    </div>
                </div>
                <div class="crt-base"></div>
                <div class="crt-foot"></div>
                <div class="pc-glow"></div>
            </div>

            <!-- Flying logos (clones, JS-controlled) -->
            <div class="flying-logo pixel-logo logo-claude" id="fly-claude"></div>
            <div class="flying-logo pixel-logo logo-openai" id="fly-openai"></div>

            <!-- Chat bubble -->
            <div id="chat-bubble">🎉 Yayyy!!</div>

            <!-- Sparks -->
            <div id="sparks-container"></div>

            <!-- Character -->
            <div id="char-container">
                <div class="char-sprite" id="charSprite">
                    <div class="char-head">
                        <div class="char-eye1"></div>
                        <div class="char-eye2"></div>
                        <div class="char-mouth" id="charMouth"></div>
                    </div>
                    <div class="char-body"></div>
                    <div class="char-leg1" id="leg1"></div>
                    <div class="char-leg2" id="leg2"></div>
                    <div class="char-shoe1" id="shoe1"></div>
                    <div class="char-shoe2" id="shoe2"></div>
                    <!-- Arm holding logos -->
                    <div class="char-arm-logos" id="armLogos">
                        <div class="pixel-logo logo-claude"></div>
                        <div class="pixel-logo logo-openai"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-hint">▼ SCROLL FOR MORE ▼</div>
    </section>

    <!-- ABOUT -->
    <section id="about">
        <div class="section-title">// ABOUT.TXT</div>
        <div class="terminal-window">
            <div class="terminal-bar">
                <div class="t-dot"></div>
                <div class="t-dot"></div>
                <div class="t-dot"></div>
                <span class="terminal-title">terminal — bash — 80x24</span>
            </div>
            <div class="terminal-body">
                <div><span class="t-prompt">root@devquest:~$</span> cat about.txt</div><br>
                <div class="typewriter"><span class="t-string">"I write code, break things, blame the compiler."</span>
                </div><br>
                <div><span class="t-comment"># Skills acquired through suffering:</span></div><br>
                <div class="stat-row"><span class="stat-label">CODING</span>
                    <div class="stat-track">
                        <div class="stat-fill" style="--w:85%"></div>
                    </div><span class="stat-val">85%</span>
                </div>
                <div class="stat-row"><span class="stat-label">COFFEE</span>
                    <div class="stat-track">
                        <div class="stat-fill" style="--w:99%;animation-delay:.2s"></div>
                    </div><span class="stat-val">99%</span>
                </div>
                <div class="stat-row"><span class="stat-label">AI USAGE</span>
                    <div class="stat-track">
                        <div class="stat-fill" style="--w:95%;animation-delay:.4s"></div>
                    </div><span class="stat-val">95%</span>
                </div>
                <div class="stat-row"><span class="stat-label">GOOGLING</span>
                    <div class="stat-track">
                        <div class="stat-fill" style="--w:100%;animation-delay:.6s"></div>
                    </div><span class="stat-val">MAX</span>
                </div>
                <div class="stat-row"><span class="stat-label">GIT PUSH</span>
                    <div class="stat-track">
                        <div class="stat-fill" style="--w:70%;animation-delay:.8s"></div>
                    </div><span class="stat-val">70%</span>
                </div><br>
                <div><span class="t-prompt">root@devquest:~$</span> <span class="blink">█</span></div>
            </div>
        </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects">
        <div class="section-title">// PROJECTS.DAT</div>
        <div class="project-grid">
            <div class="project-card"><span class="card-icon">💾</span><span class="card-label">v1.0</span>
                <div class="card-title">AI CHATBOT 9000</div>
                <div class="card-desc">It answers questions. Sometimes correctly.</div>
                <div class="card-tags"><span class="tag">REACT</span><span class="tag">NODE</span><span
                        class="tag">CLAUDE</span></div>
            </div>
            <div class="project-card"><span class="card-icon">🕹️</span><span class="card-label">v2.3</span>
                <div class="card-title">PIXEL DUNGEON</div>
                <div class="card-desc">A game where bugs are features™</div>
                <div class="card-tags"><span class="tag">JS</span><span class="tag">CANVAS</span><span
                        class="tag">PAIN</span></div>
            </div>
            <div class="project-card"><span class="card-icon">📟</span><span class="card-label">v0.1</span>
                <div class="card-title">TODO APP #47</div>
                <div class="card-desc">Like the other 46 but with dark mode.</div>
                <div class="card-tags"><span class="tag">VUE</span><span class="tag">CSS</span></div>
            </div>
            <div class="project-card"><span class="card-icon">🖥️</span><span class="card-label">v3.0</span>
                <div class="card-title">THIS PORTFOLIO</div>
                <div class="card-desc">Built with caffeine & delusion.</div>
                <div class="card-tags"><span class="tag">HTML</span><span class="tag">CSS</span><span
                        class="tag">VIBES</span></div>
            </div>
            <div class="project-card"><span class="card-icon">🤖</span><span class="card-label">v1.1</span>
                <div class="card-title">AUTO-COMMITTER</div>
                <div class="card-desc">Commits code every hour. Mostly typos.</div>
                <div class="card-tags"><span class="tag">PYTHON</span><span class="tag">GIT</span></div>
            </div>
            <div class="project-card"><span class="card-icon">🌐</span><span class="card-label">WIP</span>
                <div class="card-title">STARTUP IDEA #∞</div>
                <div class="card-desc">"Uber but for rubber ducks."</div>
                <div class="card-tags"><span class="tag">???</span><span class="tag">SOON™</span></div>
            </div>
        </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
        <div class="section-title">// CONTACT.EXE</div>
        <div class="social-row">
            <a href="#" class="social-btn">⬛ GITHUB</a>
            <a href="#" class="social-btn">🔗 LINKEDIN</a>
        </div>
    </section>

    <footer>
        <p>© 2024 Gopal Pokhrel — <span>MADE WITH ❤️ AND TOO MUCH COFFEE</span></p>
        <p style="margin-top:8px;font-size:5px;color:#1a4a2a">NO BUGS WERE HARMED. (THEY WERE CAREFULLY HIDDEN)</p>
    </footer>

    <script>
        // ===== MATRIX =====
        const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');
        function resizeMatrix() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        resizeMatrix(); window.addEventListener('resize', resizeMatrix);
        const drops = [];
        function initDrops() { drops.length = 0; for (let i = 0; i < Math.floor(canvas.width / 14); i++) drops.push(Math.random() * 40); }
        initDrops(); window.addEventListener('resize', initDrops);
        function drawMatrix() {
            ctx.fillStyle = 'rgba(10,31,18,0.07)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#39ff14'; ctx.font = '12px monospace';
            drops.forEach((y, i) => {
                ctx.fillText('01アカ'[Math.floor(Math.random() * 4)], i * 14, y * 14);
                if (y * 14 > canvas.height && Math.random() > .975) drops[i] = 0;
                drops[i]++;
            });
        }
        setInterval(drawMatrix, 80);

        // ===== STATUS =====
        const statuses = ['CAFFEINATED', 'DEBUGGING...', 'GOOGLING...', 'STACK OVERFLOWING', 'IN THE ZONE', 'SHIPPING IT', 'YOLO DEPLOY', 'AI ASSISTED'];
        let si = 0;
        setInterval(() => { si = (si + 1) % statuses.length; document.getElementById('statusText').textContent = statuses[si]; }, 2500);

        // ===== CLICK SPARKS =====
        document.addEventListener('click', e => {
            for (let i = 0; i < 6; i++) {
                const s = document.createElement('div');
                s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:4px;height:4px;background:${Math.random() > .5 ? '#39ff14' : '#ff8c00'};pointer-events:none;z-index:9998;transition:all 0.4s ease;`;
                document.body.appendChild(s);
                const a = (Math.PI * 2 * i) / 6, d = 20 + Math.random() * 20;
                requestAnimationFrame(() => { s.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px)`; s.style.opacity = '0'; });
                setTimeout(() => s.remove(), 500);
            }
        });

        // ===== MAIN CHARACTER ANIMATION STATE MACHINE =====
        const scene = document.getElementById('scene');
        const charContainer = document.getElementById('char-container');
        const charSprite = document.getElementById('charSprite');
        const armLogos = document.getElementById('armLogos');
        const flyClaude = document.getElementById('fly-claude');
        const flyOpenai = document.getElementById('fly-openai');
        const chatBubble = document.getElementById('chat-bubble');
        const sparksContainer = document.getElementById('sparks-container');
        const scError = document.getElementById('sc-error');
        const scFixing = document.getElementById('sc-fixing');
        const scFixed = document.getElementById('sc-fixed');
        const progFill = document.getElementById('progFill');
        const leg1 = document.getElementById('leg1');
        const leg2 = document.getElementById('leg2');
        const shoe1 = document.getElementById('shoe1');
        const shoe2 = document.getElementById('shoe2');
        const mouth = document.getElementById('charMouth');

        let legFrame = 0, legInterval = null;
        let charX = -60; // starts off screen left
        let facingRight = true;
        let isWalking = false;

        function setScreen(which) {
            scError.style.display = 'none';
            scFixing.style.display = 'none';
            scFixed.style.display = 'none';
            if (which === 'error') scError.style.display = 'flex';
            else if (which === 'fixing') scFixing.style.display = 'flex';
            else if (which === 'fixed') scFixed.style.display = 'flex';
        }

        function startLegAnim() {
            if (legInterval) return;
            legInterval = setInterval(() => {
                legFrame ^= 1;
                leg1.style.bottom = legFrame ? '10px' : '6px';
                leg2.style.bottom = legFrame ? '6px' : '10px';
                shoe1.style.bottom = legFrame ? '4px' : '0px';
                shoe2.style.bottom = legFrame ? '0px' : '4px';
            }, 150);
        }
        function stopLegAnim() {
            clearInterval(legInterval); legInterval = null;
            leg1.style.bottom = '6px'; leg2.style.bottom = '6px';
            shoe1.style.bottom = '0px'; shoe2.style.bottom = '0px';
        }

        function setFacing(right) {
            facingRight = right;
            charSprite.style.transform = right ? 'scaleX(1)' : 'scaleX(-1)';
        }

        function setCharX(x) {
            charX = x;
            charContainer.style.left = x + 'px';
        }

        // Get scene rect for computing positions
        function getSceneWidth() { return scene.getBoundingClientRect().width; }
        function getPCLeft() {
            const pc = document.getElementById('computer');
            const sr = scene.getBoundingClientRect();
            const pr = pc.getBoundingClientRect();
            return pr.left - sr.left;
        }
        function getPCScreenCenter() {
            const pc = document.getElementById('computer');
            const sr = scene.getBoundingClientRect();
            const pr = pc.getBoundingClientRect();
            return { x: pr.left - sr.left + pr.width / 2, y: pr.top - sr.top + pr.height / 2 - 20 };
        }

        function getCharCenter() {
            return { x: charX + 20, y: 20 };
        }

        // Move char to targetX over duration ms
        function walkTo(targetX, duration, cb) {
            setFacing(targetX > charX);
            startLegAnim();
            const startX = charX, startT = performance.now();
            function step(now) {
                const t = Math.min((now - startT) / duration, 1);
                setCharX(startX + (targetX - startX) * t);
                if (t < 1) requestAnimationFrame(step);
                else { stopLegAnim(); if (cb) cb(); }
            }
            requestAnimationFrame(step);
        }

        // Animate a flying logo from char position toward PC screen
        function throwLogo(logoEl, delay, cb) {
            setTimeout(() => {
                const sr = scene.getBoundingClientRect();
                const charRect = charContainer.getBoundingClientRect();
                const target = getPCScreenCenter();
                const startX = charRect.left - sr.left + 30;
                const startY = charRect.top - sr.top + 10;

                logoEl.style.display = 'flex';
                logoEl.style.left = startX + 'px';
                logoEl.style.top = startY + 'px';
                logoEl.style.transition = 'none';
                logoEl.style.opacity = '1';

                // arc throw: use keyframe via JS
                const duration = 1000;
                const startT = performance.now();
                const arcHeight = 60;
                function step(now) {
                    const t = Math.min((now - startT) / duration, 1);
                    const ease = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
                    const cx = startX + (target.x - startX) * ease;
                    const cy = startY + (target.y - startY) * ease - Math.sin(Math.PI * t) * arcHeight;
                    logoEl.style.left = cx + 'px';
                    logoEl.style.top = cy + 'px';
                    logoEl.style.transform = `rotate(${t * 360}deg)`;
                    if (t < 1) requestAnimationFrame(step);
                    else {
                        logoEl.style.display = 'none';
                        if (cb) cb();
                    }
                }
                requestAnimationFrame(step);
            }, delay);
        }

        // Create burst sparks at PC screen
        function burstSparks() {
            const sc = getPCScreenCenter();
            const colors = ['#39ff14', '#ff8c00', '#ffd700', '#ff3030', '#ffffff'];
            for (let i = 0; i < 16; i++) {
                const s = document.createElement('div');
                const a = Math.random() * Math.PI * 2;
                const d = 10 + Math.random() * 40;
                const c = colors[Math.floor(Math.random() * colors.length)];
                s.style.cssText = `position:absolute;width:${Math.random() > .5 ? 6 : 4}px;height:${Math.random() > .5 ? 6 : 4}px;background:${c};left:${sc.x}px;top:${sc.y}px;border:1px solid #000;transition:all 0.5s ease-out;`;
                sparksContainer.appendChild(s);
                requestAnimationFrame(() => {
                    s.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px)`;
                    s.style.opacity = '0';
                });
                setTimeout(() => s.remove(), 600);
            }
        }

        // Progress bar animation
        function animateProgress(cb) {
            let p = 0;
            const iv = setInterval(() => {
                p += Math.random() * 15 + 5;
                if (p >= 100) { p = 100; clearInterval(iv); setTimeout(cb, 200); }
                progFill.style.width = p + '%';
            }, 80);
        }

        // Show chat bubble above character
        function showChatBubble() {
            const sr = scene.getBoundingClientRect();
            const cr = charContainer.getBoundingClientRect();
            chatBubble.style.left = (cr.left - sr.left - 20) + 'px';
            chatBubble.style.top = (cr.top - sr.top - 50) + 'px';
            chatBubble.style.display = 'block';
            chatBubble.style.opacity = '1';
            // bounce
            let bFrame = 0;
            const bAnim = setInterval(() => {
                bFrame ^= 1;
                chatBubble.style.transform = bFrame ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)';
            }, 200);
            setTimeout(() => {
                clearInterval(bAnim);
                chatBubble.style.opacity = '0';
                chatBubble.style.transition = 'opacity 0.3s';
                setTimeout(() => { chatBubble.style.display = 'none'; chatBubble.style.transition = ''; chatBubble.style.transform = ''; }, 400);
            }, 1800);
        }

        // Victory jump
        function victoryJump(cb) {
            mouth.style.background = '#39ff14';
            mouth.style.height = '6px';
            mouth.style.borderRadius = '0 0 4px 4px';
            let j = 0;
            const jAnim = setInterval(() => {
                j = (j + 1) % 4;
                charContainer.style.bottom = (60 + [0, 8, 12, 8][j]) + 'px';
            }, 120);
            setTimeout(() => {
                clearInterval(jAnim);
                charContainer.style.bottom = '60px';
                mouth.style.background = '#c47a45';
                mouth.style.height = '2px';
                mouth.style.borderRadius = '0';
                if (cb) cb();
            }, 700);
        }

        // ===== MAIN LOOP =====
        function runScene() {
            const sw = getSceneWidth();
            const pcLeft = getPCLeft();
            const stopX = pcLeft - 80; // stop before PC

            setScreen('error');
            armLogos.style.display = 'flex';
            flyClaude.style.display = 'none';
            flyOpenai.style.display = 'none';
            chatBubble.style.display = 'none';
            setFacing(true);
            setCharX(-60);

            // 1. Walk in from left
            walkTo(stopX, 2200, () => {
                // 2. Hide arm logos (will throw them)
                armLogos.style.display = 'none';

                // 3. Throw Claude logo
                throwLogo(flyClaude, 0, () => {
                    // 4. Throw OpenAI logo
                    throwLogo(flyOpenai, 100, () => {
                        // 5. Screen switches to fixing + sparks
                        burstSparks();
                        setScreen('fixing');
                        animateProgress(() => {
                            // 6. Screen fixed
                            setScreen('fixed');
                            burstSparks();
                            // 7. Victory jump + bubble
                            victoryJump(() => {
                                showChatBubble();
                                // 8. Wait a moment, then walk back off screen
                                setTimeout(() => {
                                    setFacing(false);
                                    walkTo(-80, 2000, () => {
                                        // 9. Loop
                                        setTimeout(runScene, 800);
                                    });
                                }, 2000);
                            });
                        });
                    });
                });
            });
        }

        // Start after a brief delay
        setTimeout(runScene, 600);

        // Konami
        const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; let ki = 0;
        document.addEventListener('keydown', e => {
            if (e.keyCode === konami[ki]) ki++; else ki = 0;
            if (ki === konami.length) {
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => document.body.style.filter = '', 2000);
                ki = 0; alert('🎮 KONAMI CODE!\n+30 LIVES\n(still a portfolio tho)');
            }
        });
    </script>
</body>

</html>
