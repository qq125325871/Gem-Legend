require = function l(r, i, s) {
    function c(t, e) {
        if (!i[t]) {
            if (!r[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (p) return p(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var a = i[t] = {exports: {}};
            r[t][0].call(a.exports, function (e) {
                return c(r[t][1][e] || e)
            }, a, a.exports, l, r, i, s)
        }
        return i[t].exports
    }

    for (var p = "function" == typeof require && require, e = 0; e < s.length; e++) c(s[e]);
    return c
}({
    AdManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "03304fVOVBFlIhbV5vlq++6", "AdManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = function () {
            function e() {
                this.preloadedInterstitials = [], this.preloadedRewardedVideo = []
            }

            return Object.defineProperty(e, "inst", {
                get: function () {
                    return null == e._inst && (e._inst = new e), e._inst
                }, enumerable: !0, configurable: !0
            }), e.prototype.preload = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, n, o;
                    return __generator(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (!("undefined" != typeof FBInstant && 0 < FBInstant.getSupportedAPIs().indexOf("getInterstitialAdAsync"))) return [3, 8];
                                t = void 0, e.label = 1;
                            case 1:
                                return e.trys.push([1, 4, , 8]), [4, FBInstant.getInterstitialAdAsync("321329395116357_321330965116200")];
                            case 2:
                                return [4, (n = e.sent()).loadAsync()];
                            case 3:
                                return e.sent(), console.log("Interstitial preloaded"), this.preloadedInterstitials.push(n), [3, 8];
                            case 4:
                                return o = e.sent(), console.error("Interstitial failed to preload: " + o.message), null == t ? [3, 6] : [4, t.showAsync()];
                            case 5:
                                e.sent(), e.label = 6;
                            case 6:
                                return [4, this.preload()];
                            case 7:
                                return e.sent(), [3, 8];
                            case 8:
                                return [2]
                        }
                    })
                })
            }, e.prototype.show = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t;
                    return __generator(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (!("undefined" != typeof FBInstant && 0 < this.preloadedInterstitials.length)) return [3, 4];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, this.preloadedInterstitials.shift().showAsync()];
                            case 2:
                                return e.sent(), console.log("Interstitial ad finished successfully"), this.preload(), [3, 4];
                            case 3:
                                return t = e.sent(), console.error(t.message), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.prototype.preloadVideo = function () {
                var t, n = this;
                "undefined" != typeof FBInstant && (0 < FBInstant.getSupportedAPIs().indexOf("getRewardedVideoAsync") && FBInstant.getRewardedVideoAsync("321329395116357_338529876729642").then(function (e) {
                    return (t = e).loadAsync()
                }).then(function () {
                    null != t && n.preloadedRewardedVideo.push(t)
                }).catch(function (e) {
                    console.error("Rewarded video failed to preload: " + e.message), t.showAsync(), n.preloadVideo()
                }))
            }, e.prototype.showVideo = function (e) {
                var t = this;
                "undefined" != typeof FBInstant && this.preloadedRewardedVideo.shift().showAsync().then(function () {
                    e(), t.preloadVideo()
                }).catch(function (e) {
                    console.error(e.message)
                })
            }, e
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    ArrowPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "05143CdLBJDLKSLc3jpFM+O", "ArrowPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.arrowPoolPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                null == this.arrowPoolPoolList && (this.arrowPoolPoolList = new cc.NodePool);
                for (var e = 0; e < 5; ++e) {
                    var t = cc.instantiate(this.arrowPoolPrefab);
                    this.arrowPoolPoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t) {
                var n = null;
                return (n = 0 < this.arrowPoolPoolList.size() ? this.arrowPoolPoolList.get() : cc.instantiate(this.arrowPoolPrefab)).parent = e, n.position = t, n
            }, e.prototype.PutItem = function (e) {
                this.arrowPoolPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.arrowPoolPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "arrowPoolPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    AttackEffectPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "bdea4VBrfNBDaUjjLXtWyO7", "AttackEffectPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.attackPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                null == this.attackPoolList && (this.attackPoolList = new cc.NodePool);
                for (var e = 0; e < 5; ++e) {
                    var t = cc.instantiate(this.attackPrefab);
                    this.attackPoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t) {
                var n = null;
                return (n = 0 < this.attackPoolList.size() ? this.attackPoolList.get() : cc.instantiate(this.attackPrefab)).parent = e, n.position = t, n
            }, e.prototype.PutItem = function (e) {
                this.attackPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.attackPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "attackPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    AudioManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8f19cFf4g1KgYh3uhD2sIlj", "AudioManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../Eume/EliminationType"), a = cc._decorator, l = a.ccclass, r = a.property, i = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.coin = null, e.potion = null, e.sheild = null, e.sword = null, e.track = null, e.weaponHit = null, e.weaponFly = null, e.gem = null, e.button = null, e.lost = null, e.victory = null, e.monster1 = null, e.monster2 = null, e.monster3 = null, e.monster4 = null, e.monster5 = null, e.bgAudioId = 0, e.audioIsOpen = !0, e
            }

            return __extends(e, t), e.prototype.getAudioIsOpen = function () {
                return this.audioIsOpen
            }, e.prototype.playGetItemAudio = function (e) {
                if (this.audioIsOpen) {
                    var t = null;
                    switch (e) {
                        case o.EliminationType.Gold:
                            t = this.coin;
                            break;
                        case o.EliminationType.Potion:
                            t = this.potion;
                            break;
                        case o.EliminationType.Shield:
                            t = this.sheild;
                            break;
                        case o.EliminationType.Sword:
                        case o.EliminationType.Monster:
                        case o.EliminationType.SwordAndMonster:
                            t = this.sword;
                            break;
                        default:
                            t = this.coin
                    }
                    cc.audioEngine.play(t, !1, 1)
                }
            }, e.prototype.playMonsterDie = function (e) {
                if (this.audioIsOpen) {
                    var t = null;
                    switch (e) {
                        case 1001:
                            t = this.monster1;
                            break;
                        case 1002:
                            t = this.monster2;
                            break;
                        case 1003:
                            t = this.monster3;
                            break;
                        case 1004:
                            t = this.monster4;
                            break;
                        case 1005:
                            t = this.monster5;
                            break;
                        default:
                            t = this.monster1
                    }
                    cc.audioEngine.play(t, !1, 1)
                }
            }, e.prototype.playVictory = function () {
                this.audioIsOpen && cc.audioEngine.play(this.victory, !1, 1)
            }, e.prototype.playLost = function () {
                this.audioIsOpen && cc.audioEngine.play(this.lost, !1, 1)
            }, e.prototype.playClickBtn = function () {
                this.audioIsOpen && cc.audioEngine.play(this.button, !1, 1)
            }, e.prototype.playWeaponFly = function () {
                this.audioIsOpen && cc.audioEngine.play(this.weaponFly, !1, 1)
            }, e.prototype.playWeaponHit = function () {
                this.audioIsOpen && cc.audioEngine.play(this.weaponHit, !1, 1)
            }, e.prototype.playGem = function () {
                this.audioIsOpen && cc.audioEngine.play(this.gem, !1, 1)
            }, e.prototype.playBGAudio = function () {
                this.bgAudioId = cc.audioEngine.play(this.track, !0, .5)
            }, e.prototype.closeBGAudio = function () {
                cc.audioEngine.stop(this.bgAudioId)
            }, e.prototype.openAudio = function () {
                this.audioIsOpen = !0, this.playBGAudio()
            }, e.prototype.closeAudio = function () {
                this.audioIsOpen = !1, this.closeBGAudio()
            }, __decorate([r(cc.AudioClip)], e.prototype, "coin", void 0), __decorate([r(cc.AudioClip)], e.prototype, "potion", void 0), __decorate([r(cc.AudioClip)], e.prototype, "sheild", void 0), __decorate([r(cc.AudioClip)], e.prototype, "sword", void 0), __decorate([r(cc.AudioClip)], e.prototype, "track", void 0), __decorate([r(cc.AudioClip)], e.prototype, "weaponHit", void 0), __decorate([r(cc.AudioClip)], e.prototype, "weaponFly", void 0), __decorate([r(cc.AudioClip)], e.prototype, "gem", void 0), __decorate([r(cc.AudioClip)], e.prototype, "button", void 0), __decorate([r(cc.AudioClip)], e.prototype, "lost", void 0), __decorate([r(cc.AudioClip)], e.prototype, "victory", void 0), __decorate([r(cc.AudioClip)], e.prototype, "monster1", void 0), __decorate([r(cc.AudioClip)], e.prototype, "monster2", void 0), __decorate([r(cc.AudioClip)], e.prototype, "monster3", void 0), __decorate([r(cc.AudioClip)], e.prototype, "monster4", void 0), __decorate([r(cc.AudioClip)], e.prototype, "monster5", void 0), e = __decorate([l], e)
        }(cc.Component);
        n.default = i, cc._RF.pop()
    }, {"../Eume/EliminationType": "EliminationType"}],
    BasePlatform: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "5be36/O/UtHe4YQQEN7pMN7", "BasePlatform"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = function () {
            function e() {
            }

            return Object.defineProperty(e, "inst", {
                get: function () {
                    return null == this._inst ? new e : this._inst
                }, enumerable: !0, configurable: !0
            }), e.prototype.BasePlatform = function () {
            }, e.prototype.getPlayerInfo = function (e) {
                void 0 === e && (e = function (e) {
                }), e({
                    isFirst: !0,
                    reviveNum: 0,
                    money: 0,
                    extraAttackValue: 0,
                    attackLevel: 1,
                    defenseLevel: 1,
                    hpLevel: 1,
                    curArmor: 50,
                    curHp: 100,
                    curScore: 0,
                    completeLevelList: [],
                    curskills: [],
                    propMap: ""
                })
            }, e.prototype.save = function (e, t, n) {
                void 0 === n && (n = function () {
                })
            }, e.prototype.refreshLeaderBoard = function () {
            }, e.prototype.challengeFriend = function (e, t) {
                void 0 === e && (e = function () {
                }), void 0 === t && (t = function () {
                })
            }, e._inst = null, e
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    BlockInput: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ecf4f+h5MxCz4hkN+moULMU", "BlockInput"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = (o.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return __extends(t, e), t.prototype.start = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                }), this.node.on(cc.Node.EventType.TOUCH_END, function (e) {
                })
            }, t = __decorate([a], t)
        }(cc.Component));
        n.default = l, cc._RF.pop()
    }, {}],
    BossSkillManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "caba9A2K39FpKq9iiFC4y6D", "BossSkillManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../Data/EnemySkill"), l = e("../Eume/BossSkillType"), a = e("./ItemManager"), r = e("./GameManager"),
            i = e("./CalculationManager"), s = cc._decorator, c = s.ccclass, p = (s.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.auraNum = 0, e.itemInfo = null, e
                }

                return __extends(e, t), (n = e).prototype.init = function () {
                    null == n.inst && (n.inst = this)
                }, e.prototype.getSkill = function (e) {
                    return o.EnemySkill.get(e)
                }, e.prototype.useSkill = function (e, t, n, o) {
                    void 0 === o && (o = !1);
                    var a = t.skillType;
                    switch (this.itemInfo = n.getComponent("ItemInfo"), a) {
                        case l.BossSkillType.ActiveSkill:
                            this.activeSkill(e, t);
                            break;
                        case l.BossSkillType.AuraSkill:
                            this.auraSkill(e, t, o);
                            break;
                        case l.BossSkillType.AttackedPassiveSkill:
                            this.attackedPassiveSkill(t);
                            break;
                        case l.BossSkillType.BeforeATKPassiveSkill:
                            this.beforeATKPassiveSkill(t);
                            break;
                        case l.BossSkillType.AfterATKPassiveSkill:
                            this.afterATKPassiveSkill(e, t)
                    }
                }, e.prototype.activeSkill = function (e, t) {
                    switch (e) {
                        case 1001:
                            a.ItemManager.inst.beckonMonster(t.skillParam);
                            break;
                        case 1004:
                            a.ItemManager.inst.bloodRecovery(t.skillParam);
                            break;
                        case 9e3:
                            a.ItemManager.inst.monsterAddDamage(this.itemInfo)
                    }
                }, e.prototype.beckonMonster = function () {
                }, e.prototype.auraSkill = function (e, t, n) {
                    var o = this.auraNum, a = 0;
                    if (n ? this.auraNum-- : this.auraNum++, 0 == o && 0 < this.auraNum) switch (a = t.skillParam, e) {
                        case 1005:
                            r.default.inst.playerInfo.SetActtackParam(a)
                    } else if (0 < o && 0 == this.auraNum) switch (a = -t.skillParam, e) {
                        case 1005:
                            r.default.inst.playerInfo.SetActtackParam(a)
                    }
                }, e.prototype.attackedPassiveSkill = function (e) {
                    this.reflectDamage(e)
                }, e.prototype.reflectDamage = function (e) {
                    var t = e.skillParam, n = -Math.floor(this.itemInfo.getDamageNum() * t);
                    r.default.inst.playerInfo.ChangeHp(n)
                }, e.prototype.beforeATKPassiveSkill = function (e) {
                    this.ignoreDefine(e)
                }, e.prototype.ignoreDefine = function (e) {
                    var t = e.skillParam;
                    i.default.inst.SetCurMonsterAttackType(t)
                }, e.prototype.afterATKPassiveSkill = function (e, t) {
                    switch (e) {
                        case 1007:
                            this.stealGold(t);
                            break;
                        case 1008:
                            this.suckBlood(t)
                    }
                }, e.prototype.stealGold = function (e) {
                    var t = Math.round(e.skillParam * this.itemInfo.getMonsterDamage());
                    t = Math.max(t, 1), r.default.inst.playerInfo.ChangeMoney(-t)
                }, e.prototype.suckBlood = function (e) {
                    var t = Math.round(this.itemInfo.getMonsterDamage() * e.skillParam);
                    this.itemInfo.setMonsterHp(t)
                }, e = n = __decorate([c], e);
                var n
            }(cc.Component));
        n.default = p, cc._RF.pop()
    }, {
        "../Data/EnemySkill": "EnemySkill",
        "../Eume/BossSkillType": "BossSkillType",
        "./CalculationManager": "CalculationManager",
        "./GameManager": "GameManager",
        "./ItemManager": "ItemManager"
    }],
    BossSkillType: [function (e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "1ebbaUfiepLEoRa1R0R8elo", "BossSkillType"), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.BossSkillType || (n.BossSkillType = {}))[o.ActiveSkill = 1] = "ActiveSkill", o[o.AuraSkill = 2] = "AuraSkill", o[o.AttackedPassiveSkill = 3] = "AttackedPassiveSkill", o[o.BeforeATKPassiveSkill = 4] = "BeforeATKPassiveSkill", o[o.AfterATKPassiveSkill = 5] = "AfterATKPassiveSkill", cc._RF.pop()
    }, {}],
    BossSkill: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9cbfcOmEyVIKJNDQyuI2ibz", "BossSkill"), Object.defineProperty(n, "__esModule", {value: !0}), n.BossSkill = new Map, n.BossSkill.set(1001, {
            bossId: 3001,
            skillType: 5,
            skillCd: 0,
            skillParam: .1,
            skillDes: "攻击时回复气血10% "
        }), n.BossSkill.set(1002, {
            bossId: 3001,
            skillType: 1,
            skillCd: 2,
            skillParam: 3,
            skillDes: "3个元素随机失效"
        }), n.BossSkill.set(1003, {
            bossId: 3001,
            skillType: 1,
            skillCd: 3,
            skillParam: .2,
            skillDes: "攻击力提高20%"
        }), n.BossSkill.set(1004, {
            bossId: 3002,
            skillType: 4,
            skillCd: 0,
            skillParam: .2,
            skillDes: "忽视护甲，造成20%以上的伤害"
        }), n.BossSkill.set(1005, {
            bossId: 3002,
            skillType: 1,
            skillCd: 2,
            skillParam: 3,
            skillDes: "随机冻结3个元素2圈 "
        }), n.BossSkill.set(1006, {
            bossId: 3002,
            skillType: 1,
            skillCd: 3,
            skillParam: .2,
            skillDes: "攻击力提高20%"
        }), n.BossSkill.set(1007, {
            bossId: 3002,
            skillType: 1,
            skillCd: 4,
            skillParam: 200,
            skillDes: "200 HP恢复模式"
        }), n.BossSkill.set(1008, {
            bossId: 3003,
            skillType: 3,
            skillCd: 0,
            skillParam: .2,
            skillDes: "能量损失的20%返还"
        }), n.BossSkill.set(1009, {
            bossId: 3003,
            skillType: 1,
            skillCd: 2,
            skillParam: 3,
            skillDes: "随机燃烧3个元素，匹配后每一个元素造成（BOSS攻击力*0.2）伤害"
        }), n.BossSkill.set(1010, {
            bossId: 3003,
            skillType: 1,
            skillCd: 3,
            skillParam: .2,
            skillDes: "攻击力提高20%"
        }), n.BossSkill.set(1011, {
            bossId: 3003,
            skillType: 1,
            skillCd: 4,
            skillParam: 300,
            skillDes: "300 HP恢复模式"
        }), cc._RF.pop()
    }, {}],
    Boss: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "2f05dJcKzFDA72BFxKExFz7", "Boss"), Object.defineProperty(n, "__esModule", {value: !0}), n.Boss = new Map, n.Boss.set(3001, {
            bossHp: 3e3,
            bossAtk: 60,
            bossName: "Master Bone"
        }), n.Boss.set(3002, {bossHp: 7e3, bossAtk: 120, bossName: "General AXE"}), n.Boss.set(3003, {
            bossHp: 12e3,
            bossAtk: 240,
            bossName: "Fire Dragon"
        }), cc._RF.pop()
    }, {}],
    CalculationManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e4eca8WIONBCavIrkVNt7Jr", "CalculationManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var h = e("../Eume/EliminationType"), m = e("../Model/ItemInfo"), y = e("../Eume/ItemType"),
            I = e("../Data/Conect"), f = e("../UI/UIPanelController"), P = e("../charactor/PlayerInfo"),
            g = e("../Data/Skill"), k = e("../Eume/PlayerSkillType"), T = e("./GameManager"), u = e("./ItemManager"),
            C = e("../Eume/LevelType "), v = e("../Model/LevelBossInfo"), p = e("../Data/Enemy"), o = cc._decorator,
            a = o.ccclass, l = (o.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.attackType = 0, e
                }

                return __extends(e, t), (n = e).prototype.init = function () {
                    null == n.inst && (n.inst = this)
                }, e.prototype.Eliminate = function (e, t, n, o) {
                    var a = this;
                    if (void 0 === t && (t = null), void 0 === n && (n = !1), void 0 === o && (o = null), null != t && 0 != t.length) {
                        var l = -1;
                        P.PlayerData.curScore += t.length, f.default.instance.mainUIPanel.allScore.string = P.PlayerData.curScore.toString();
                        var r = T.default.inst.playerInfo.getAttackValue(), i = 0;
                        if (P.PlayerData.curLevelType == C.LevelType.boss) for (var s = 0; s < t.length; s++) {
                            t[s].getComponent(m.default).getSpecialStatus().curStatus != y.ItemSpecialType.invalid && i++
                        } else i = t.length;
                        switch (e) {
                            case h.EliminationType.Gold:
                                var c = I.Conect.get(i).coin;
                                if (0 < (l = this.JudgeisHasSkill(k.PlayerSkillType.ExtraGold))) c += Math.floor(c * g.Skill.get(l).skillParam);
                                T.default.inst.playerInfo.ChangeMoney(c, function () {
                                    a.GainSkillIncome(n)
                                });
                                break;
                            case h.EliminationType.Shield:
                                var p = I.Conect.get(i).shield;
                                T.default.inst.playerInfo.ChangeArmor(p, function () {
                                    a.GainSkillIncome(n)
                                });
                                break;
                            case h.EliminationType.Sword:
                                var u = I.Conect.get(i).sword + r * i;
                                this.JudgeOnlySword(t, u, n, i, o);
                                break;
                            case h.EliminationType.Potion:
                                var d = I.Conect.get(i).potion;
                                if (0 < (l = this.JudgeisHasSkill(k.PlayerSkillType.AdvancedTreatment))) d += Math.floor(d * g.Skill.get(l).skillParam);
                                T.default.inst.playerInfo.ChangeHp(d, function () {
                                    a.GainSkillIncome(n)
                                });
                                break;
                            case h.EliminationType.Monster:
                                this.JudgeMonsterIsDead(t, r, n, o);
                                break;
                            case h.EliminationType.SwordAndMonster:
                                var v = 0, A = 0;
                                for (s = 0; s < t.length; s++) {
                                    t[s].getComponent("ItemInfo").type == y.ItemType.Sword && v++
                                }
                                A = 0 < v ? I.Conect.get(v).sword + r * v : r;
                                for (s = 0; s < t.length; s++) t[s];
                                this.JudgeMonsterIsDead(t, A, n, o)
                        }
                    }
                }, e.prototype.JudgeOnlySword = function (e, t, n, o, a) {
                    void 0 === o && (o = 0), void 0 === a && (a = null);
                    var l = 1;
                    P.PlayerData.isCanDoubleDamage && (t *= 2, P.PlayerData.isCanDoubleDamage = !1, f.default.instance.mainUIPanel.showDoubleAttack(!1), l = 2);
                    var r = this.JudgeisHasSkill(k.PlayerSkillType.ViolentAttack);
                    if (0 < r) {
                        var i = g.Skill.get(r).skillParam;
                        Math.random() < i && (t *= 2, l = 4)
                    }
                    if (P.PlayerData.curLevelType == C.LevelType.boss) u.ItemManager.inst.attackLevelBossDamage(Math.round(t), o, l), null != a && a(0); else for (var s = 0, c = 0; c < e.length; c++) {
                        var p = e[c].getComponent("ItemInfo");
                        this.PlayPlayerAttackAnimation(p.node, function () {
                            ++s == e.length && null != a && a(0)
                        })
                    }
                }, e.prototype.AttackLevelBoss = function (e) {
                    T.default.inst.levelBoss.getComponent(v.default).attackBoss(e)
                }, e.prototype.levelBossGainSkillIncome = function (e) {
                    this.GainSkillIncome(e)
                }, e.prototype.JudgeMonsterIsDead = function (o, a, l, r) {
                    void 0 === r && (r = null);
                    var i = [], s = 1;
                    P.PlayerData.isCanDoubleDamage && (a *= 2, P.PlayerData.isCanDoubleDamage = !1, f.default.instance.mainUIPanel.showDoubleAttack(!1), s *= 2);
                    var e = this.JudgeisHasSkill(k.PlayerSkillType.ViolentAttack);
                    if (0 < e) {
                        var t = g.Skill.get(e).skillParam;
                        Math.random() < t && (a *= 2, s *= 2)
                    }
                    for (var c = 0, n = function (e) {
                        var n = o[e].getComponent("ItemInfo");
                        p.PlayPlayerAttackAnimation(n.node, function () {
                            if (l) {
                                var e = n.getMonsterHp();
                                n.setMonsterHp(-e), r(0)
                            } else {
                                if (c++, 0 < n.getMonsterId() && 0 < n.getMonsterHp()) {
                                    var t = Math.round(a);
                                    n.setMonsterHp(-t, s, !0)
                                }
                                0 < n.monsterHp && i.push(n.node), c == o.length && null != r && r(i.length)
                            }
                        })
                    }, p = this, u = 0; u < o.length; u++) n(u)
                }, e.prototype.JudgeisHasSkill = function (e) {
                    for (var t = 0; t < P.PlayerData.curskills.length; t++) {
                        if (g.Skill.get(P.PlayerData.curskills[t]).skillType == e) return P.PlayerData.curskills[t]
                    }
                    return -1
                }, e.prototype.GainSkillIncome = function (e) {
                    if (!e) if (0 < P.PlayerData.curskills.length) for (var t = 0; t < P.PlayerData.curskills.length; t++) {
                        var n = g.Skill.get(P.PlayerData.curskills[t]).skillParam;
                        switch (g.Skill.get(P.PlayerData.curskills[t]).skillType) {
                            case k.PlayerSkillType.Heal:
                                var o = Math.floor(P.PlayerData.maxHp * n);
                                T.default.inst.playerInfo.ChangeHp(o);
                                break;
                            case k.PlayerSkillType.Greedy:
                                T.default.inst.playerInfo.ChangeMoney(n);
                                break;
                            case k.PlayerSkillType.CastArmour:
                                T.default.inst.playerInfo.ChangeArmor(n)
                        }
                        t == P.PlayerData.curskills.length - 1 && u.ItemManager.inst.monsterAttack()
                    } else u.ItemManager.inst.monsterAttack()
                }, e.prototype.SetCurMonsterAttackType = function (e) {
                    this.attackType = e
                }, e.prototype.checkPlayerMissSkill = function () {
                    for (var e = 0; e < P.PlayerData.curskills.length; e++) {
                        var t = g.Skill.get(P.PlayerData.curskills[e]).skillParam;
                        if (g.Skill.get(P.PlayerData.curskills[e]).skillType == k.PlayerSkillType.Dodge) if (Math.random() < t) return !0
                    }
                    return !1
                }, e.prototype.PlayPlayerAttackAnimation = function (e, t) {
                    void 0 === t && (t = null);
                    var n = e.getComponent("ItemInfo"),
                        o = T.default.inst.attackEffectPool.CreateItem(u.ItemManager.inst.itemParent, e.position);
                    n.getType() == y.ItemType.Monster && this.PlayHurtMonsterAnimation(e);
                    var a = 0, l = function () {
                        10 == a && (o.children[0].getComponent(cc.Sprite).fillRange = 0, T.default.inst.attackEffectPool.PutItem(o), this.unschedule(l), null != t && t()), o.children[0].getComponent(cc.Sprite).fillRange += .1, a++
                    };
                    o.children[0].getComponent(cc.Sprite).schedule(l, .015), T.default.inst.audioManager.playGetItemAudio(h.EliminationType.Sword)
                }, e.prototype.PlayHurtMonsterAnimation = function (e, t) {
                    void 0 === t && (t = null);
                    var n = e.getChildByName("icon");
                    n.children[0].color = cc.Color.RED;
                    var o = cc.callFunc(function (e) {
                            n.position = cc.Vec2.ZERO, n.children[0].color = cc.Color.WHITE, null != t && t()
                        }, this), a = new cc.Vec2(20, 0), l = new cc.Vec2(-20, 0),
                        r = cc.sequence(cc.moveTo(.0375, a), cc.moveTo(.075, l), cc.moveTo(.0375, 0, 0), o);
                    n.runAction(r)
                }, e.prototype.PlayBeforeMonsterAttackAnimation = function (e, t) {
                    void 0 === t && (t = null);
                    var n = e.getChildByName("icon"), o = cc.callFunc(function (e) {
                            null != t && t()
                        }, this), a = new cc.Vec2(0, 40), l = new cc.Vec2(0, -40),
                        r = cc.sequence(cc.moveBy(.15, a), o, cc.moveBy(.15, l));
                    n.runAction(r)
                }, e.prototype.PlayMonsterAttackAnimation = function (n, o) {
                    var a = this;
                    void 0 === o && (o = null);
                    var e = 0 == this.attackType && 0 < P.PlayerData.curArmor ? y.ItemType.Shield : y.ItemType.Potion,
                        t = T.default.inst.itemManager.getMoveToPosition(e),
                        l = p.Enemy.get(n.getComponent(m.default).getMonsterId()).atkType,
                        r = T.default.inst.icons.monsterThrow[l],
                        i = T.default.inst.monsterAttackPool.CreateItem(u.ItemManager.inst.itemParent, n.position, r),
                        s = cc.callFunc(function (e) {
                            if (T.default.inst.audioManager.playWeaponHit(), T.default.inst.monsterAttackPool.PutItem(e), null != o) {
                                var t = n.getComponent("ItemInfo");
                                a.MonsterAttackDamage(t.getMonsterDamage(), function () {
                                    T.default.inst.gameOverPanel.getGameOver() ? T.default.inst.gameOverPanel.setGameOver(!1) : o()
                                }, t)
                            }
                        }, this), c = cc.sequence(cc.spawn(cc.moveTo(.3, t), cc.rotateBy(.3, 1080)), s);
                    c.easing(cc.easeIn(5)), i.runAction(c), T.default.inst.audioManager.playWeaponFly()
                }, e.prototype.MonsterNormalAttack = function (e, t) {
                    var n = this;
                    void 0 === t && (t = null), this.PlayBeforeMonsterAttackAnimation(e, function () {
                        n.PlayMonsterAttackAnimation(e, t)
                    })
                }, e.prototype.MonsterAttackDamage = function (e, t, n) {
                    if (void 0 === n && (n = null), this.checkPlayerMissSkill()) T.default.inst.uiPanelController.mainUIPanel.PlayMissAnimation(t); else if (0 == this.attackType) {
                        var o = T.default.inst.playerInfo.getArmor(),
                            a = this.JudgeisHasSkill(k.PlayerSkillType.DoubleArmor), l = 1;
                        0 < a && (l = g.Skill.get(a).skillParam);
                        var r = o * l, i = -Math.round(e / l);
                        0 == i && (i = -1);
                        var s = 0, c = 0;
                        if (0 < P.PlayerData.curArmor) {
                            var p = this.JudgeisHasSkill(k.PlayerSkillType.AgnailArmor);
                            0 < p && (s = g.Skill.get(p).skillParam, c = s * i)
                        }
                        if (e <= r) T.default.inst.playerInfo.ChangeArmor(i, function () {
                            c < 0 ? null != n ? n.setBrambleDamage(c, t) : T.default.inst.levelBoss.getComponent(v.default).AgnailArmorDamage(-c, t) : t()
                        }); else if (0 < P.PlayerData.curArmor) {
                            var u = -P.PlayerData.curArmor;
                            T.default.inst.playerInfo.ChangeArmor(u);
                            var d = r - e;
                            T.default.inst.playerInfo.ChangeHp(d, function () {
                                c < 0 ? null != n ? n.setBrambleDamage(u * s, t) : T.default.inst.levelBoss.getComponent(v.default).AgnailArmorDamage(-u * s, t) : t()
                            })
                        } else T.default.inst.playerInfo.ChangeHp(-e, t)
                    } else this.attackType = 0, T.default.inst.playerInfo.ChangeHp(-e, t)
                }, e.prototype.MonsterIgnorDefenceAttack = function (e) {
                }, e = n = __decorate([a], e);
                var n
            }(cc.Component));
        n.default = l, cc._RF.pop()
    }, {
        "../Data/Conect": "Conect",
        "../Data/Enemy": "Enemy",
        "../Data/Skill": "Skill",
        "../Eume/EliminationType": "EliminationType",
        "../Eume/ItemType": "ItemType",
        "../Eume/LevelType ": "LevelType ",
        "../Eume/PlayerSkillType": "PlayerSkillType",
        "../Model/ItemInfo": "ItemInfo",
        "../Model/LevelBossInfo": "LevelBossInfo",
        "../UI/UIPanelController": "UIPanelController",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./GameManager": "GameManager",
        "./ItemManager": "ItemManager"
    }],
    Conect: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d78f83nyfxFqIbbQQe2usGm", "Conect"), Object.defineProperty(n, "__esModule", {value: !0}), n.Conect = new Map, n.Conect.set(0, {
            coin: 0,
            sword: 0,
            shield: 0,
            potion: 0
        }), n.Conect.set(1, {coin: 10, sword: 2, shield: 1, potion: 5}), n.Conect.set(2, {
            coin: 20,
            sword: 4,
            shield: 4,
            potion: 20
        }), n.Conect.set(3, {coin: 30, sword: 6, shield: 5, potion: 25}), n.Conect.set(4, {
            coin: 40,
            sword: 8,
            shield: 6,
            potion: 30
        }), n.Conect.set(5, {coin: 60, sword: 12, shield: 9, potion: 45}), n.Conect.set(6, {
            coin: 70,
            sword: 14,
            shield: 10,
            potion: 50
        }), n.Conect.set(7, {coin: 80, sword: 16, shield: 11, potion: 55}), n.Conect.set(8, {
            coin: 100,
            sword: 18,
            shield: 14,
            potion: 65
        }), n.Conect.set(9, {coin: 110, sword: 22, shield: 15, potion: 75}), n.Conect.set(10, {
            coin: 120,
            sword: 24,
            shield: 16,
            potion: 80
        }), n.Conect.set(11, {coin: 140, sword: 26, shield: 19, potion: 90}), n.Conect.set(12, {
            coin: 150,
            sword: 28,
            shield: 20,
            potion: 95
        }), n.Conect.set(13, {coin: 160, sword: 32, shield: 21, potion: 105}), n.Conect.set(14, {
            coin: 180,
            sword: 34,
            shield: 24,
            potion: 115
        }), n.Conect.set(15, {coin: 190, sword: 36, shield: 25, potion: 120}), n.Conect.set(16, {
            coin: 200,
            sword: 38,
            shield: 26,
            potion: 125
        }), n.Conect.set(17, {coin: 220, sword: 42, shield: 29, potion: 140}), n.Conect.set(18, {
            coin: 230,
            sword: 44,
            shield: 30,
            potion: 145
        }), n.Conect.set(19, {coin: 240, sword: 46, shield: 31, potion: 150}), n.Conect.set(20, {
            coin: 260,
            sword: 48,
            shield: 34,
            potion: 160
        }), n.Conect.set(21, {coin: 270, sword: 52, shield: 35, potion: 170}), n.Conect.set(22, {
            coin: 280,
            sword: 54,
            shield: 36,
            potion: 175
        }), n.Conect.set(23, {coin: 300, sword: 56, shield: 39, potion: 185}), n.Conect.set(24, {
            coin: 310,
            sword: 58,
            shield: 40,
            potion: 190
        }), n.Conect.set(25, {coin: 320, sword: 62, shield: 41, potion: 200}), n.Conect.set(26, {
            coin: 340,
            sword: 64,
            shield: 44,
            potion: 210
        }), n.Conect.set(27, {coin: 350, sword: 66, shield: 45, potion: 215}), n.Conect.set(28, {
            coin: 360,
            sword: 68,
            shield: 46,
            potion: 220
        }), n.Conect.set(29, {coin: 380, sword: 72, shield: 49, potion: 235}), n.Conect.set(30, {
            coin: 390,
            sword: 74,
            shield: 50,
            potion: 240
        }), n.Conect.set(31, {coin: 400, sword: 76, shield: 51, potion: 245}), n.Conect.set(32, {
            coin: 420,
            sword: 78,
            shield: 54,
            potion: 255
        }), n.Conect.set(33, {coin: 430, sword: 82, shield: 55, potion: 265}), n.Conect.set(34, {
            coin: 440,
            sword: 84,
            shield: 56,
            potion: 270
        }), n.Conect.set(35, {coin: 460, sword: 86, shield: 59, potion: 280}), n.Conect.set(36, {
            coin: 470,
            sword: 88,
            shield: 60,
            potion: 285
        }), cc._RF.pop()
    }, {}],
    DataManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "15a890dwm1Mj55W6wBRXBRn", "DataManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = function () {
            function e() {
            }

            return Object.defineProperty(e, "inst", {
                get: function () {
                    return null == e._inst && (e._inst = new e), e._inst
                }, enumerable: !0, configurable: !0
            }), e
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    EliminationType: [function (e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "8b557AhXAdAkYGbzue42FeQ", "EliminationType"), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.EliminationType || (n.EliminationType = {}))[o.Shield = 0] = "Shield", o[o.Gold = 1] = "Gold", o[o.Potion = 2] = "Potion", o[o.Sword = 3] = "Sword", o[o.Monster = 4] = "Monster", o[o.SwordAndMonster = 5] = "SwordAndMonster", cc._RF.pop()
    }, {}],
    EnemyGroup: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8379eTkFaFKSJtmyNZ+E/p0", "EnemyGroup"), Object.defineProperty(n, "__esModule", {value: !0}), n.EnemyGroup = [{
            groupId: 100001,
            enemyId: 1001,
            weight: 10
        }, {groupId: 100001, enemyId: 1002, weight: 10}, {groupId: 100001, enemyId: 1003, weight: 10}, {
            groupId: 100001,
            enemyId: 1004,
            weight: 10
        }, {groupId: 100002, enemyId: 1003, weight: 10}, {groupId: 100002, enemyId: 1004, weight: 10}, {
            groupId: 100002,
            enemyId: 1005,
            weight: 10
        }, {groupId: 100002, enemyId: 1006, weight: 10}, {groupId: 100003, enemyId: 1005, weight: 10}, {
            groupId: 100003,
            enemyId: 1006,
            weight: 10
        }, {groupId: 100003, enemyId: 1007, weight: 10}, {groupId: 100003, enemyId: 1008, weight: 10}, {
            groupId: 100004,
            enemyId: 1007,
            weight: 10
        }, {groupId: 100004, enemyId: 1008, weight: 10}, {groupId: 100004, enemyId: 1009, weight: 10}, {
            groupId: 100004,
            enemyId: 1010,
            weight: 10
        }, {groupId: 100005, enemyId: 1009, weight: 10}, {groupId: 100005, enemyId: 1010, weight: 10}, {
            groupId: 100005,
            enemyId: 1001,
            weight: 10
        }, {groupId: 100005, enemyId: 1002, weight: 10}, {groupId: 100006, enemyId: 1001, weight: 10}, {
            groupId: 100006,
            enemyId: 1002,
            weight: 10
        }, {groupId: 100006, enemyId: 1003, weight: 10}, {groupId: 100006, enemyId: 1004, weight: 10}, {
            groupId: 100006,
            enemyId: 1005,
            weight: 10
        }, {groupId: 100006, enemyId: 1006, weight: 10}, {groupId: 100006, enemyId: 1007, weight: 10}, {
            groupId: 100006,
            enemyId: 1008,
            weight: 10
        }, {groupId: 100006, enemyId: 1009, weight: 10}, {groupId: 100006, enemyId: 1010, weight: 10}, {
            groupId: 900001,
            enemyId: 2001,
            weight: 10
        }, {groupId: 900001, enemyId: 2002, weight: 10}, {groupId: 900002, enemyId: 2002, weight: 10}, {
            groupId: 900002,
            enemyId: 2003,
            weight: 10
        }, {groupId: 900003, enemyId: 2003, weight: 10}, {groupId: 900003, enemyId: 2004, weight: 10}, {
            groupId: 900004,
            enemyId: 2004,
            weight: 10
        }, {groupId: 900004, enemyId: 2005, weight: 10}, {groupId: 900005, enemyId: 2005, weight: 10}, {
            groupId: 900005,
            enemyId: 2001,
            weight: 10
        }, {groupId: 900006, enemyId: 2001, weight: 10}, {groupId: 900006, enemyId: 2002, weight: 10}, {
            groupId: 900006,
            enemyId: 2003,
            weight: 10
        }, {groupId: 900006, enemyId: 2004, weight: 10}, {groupId: 900006, enemyId: 2005, weight: 10}], cc._RF.pop()
    }, {}],
    EnemySkill: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "f066eiS6yBGyZKDVb/mzJsR", "EnemySkill"), Object.defineProperty(n, "__esModule", {value: !0}), n.EnemySkill = new Map, n.EnemySkill.set(1001, {
            skillType: 1,
            skillCD: 3,
            skillParam: 100001,
            des: "召唤"
        }), n.EnemySkill.set(1002, {
            skillType: 4,
            skillCD: 0,
            skillParam: 1,
            des: "忽略装甲"
        }), n.EnemySkill.set(1003, {
            skillType: 3,
            skillCD: 0,
            skillParam: .4,
            des: "反射损伤"
        }), n.EnemySkill.set(1004, {
            skillType: 1,
            skillCD: 1,
            skillParam: .1,
            des: "治愈"
        }), n.EnemySkill.set(1005, {
            skillType: 2,
            skillCD: 0,
            skillParam: .7,
            des: "降低攻击力"
        }), n.EnemySkill.set(1007, {
            skillType: 5,
            skillCD: 0,
            skillParam: .7,
            des: "偷金"
        }), n.EnemySkill.set(1008, {
            skillType: 5,
            skillCD: 0,
            skillParam: .2,
            des: "生命窃取"
        }), n.EnemySkill.set(9e3, {skillType: 1, skillCD: 0, skillParam: 0, des: "Atk"}), cc._RF.pop()
    }, {}],
    Enemy: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "00bf7124yFEVpunncnlMLJ9", "Enemy"), Object.defineProperty(n, "__esModule", {value: !0}), n.Enemy = new Map, n.Enemy.set(1001, {
            type: 1,
            baseHp: 21,
            baseAtk: 8,
            icon: 0,
            notice: "狼",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 0
        }), n.Enemy.set(1002, {
            type: 1,
            baseHp: 25,
            baseAtk: 7,
            icon: 1,
            notice: "野猪",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 0
        }), n.Enemy.set(1003, {
            type: 1,
            baseHp: 20,
            baseAtk: 8,
            icon: 2,
            notice: "蓝眼骷髅",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 1
        }), n.Enemy.set(1004, {
            type: 1,
            baseHp: 21,
            baseAtk: 9,
            icon: 3,
            notice: "绿眼骷髅",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 1
        }), n.Enemy.set(1005, {
            type: 1,
            baseHp: 19,
            baseAtk: 8,
            icon: 4,
            notice: "哥布林",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 2
        }), n.Enemy.set(1006, {
            type: 1,
            baseHp: 23,
            baseAtk: 9,
            icon: 5,
            notice: "刀疤哥布林",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 2
        }), n.Enemy.set(1007, {
            type: 1,
            baseHp: 22,
            baseAtk: 8,
            icon: 6,
            notice: "胡子巨魔",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 3
        }), n.Enemy.set(1008, {
            type: 1,
            baseHp: 24,
            baseAtk: 9,
            icon: 7,
            notice: "秃头巨魔",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 3
        }), n.Enemy.set(1009, {
            type: 1,
            baseHp: 27,
            baseAtk: 10,
            icon: 8,
            notice: "大嘴兽人",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 4
        }), n.Enemy.set(1010, {
            type: 1,
            baseHp: 26,
            baseAtk: 9,
            icon: 9,
            notice: "兽人",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 4
        }), n.Enemy.set(2001, {
            type: 1,
            baseHp: 125,
            baseAtk: 15,
            icon: 10,
            notice: "猴",
            atkUpCD: 3,
            atkUpPer: 50,
            atkType: 0
        }), n.Enemy.set(2002, {
            type: 2,
            baseHp: 115,
            baseAtk: 19,
            icon: 11,
            notice: "长角骷髅",
            atkUpCD: 5,
            atkUpPer: 50,
            atkType: 1
        }), n.Enemy.set(2003, {
            type: 2,
            baseHp: 130,
            baseAtk: 18,
            icon: 12,
            notice: "黄布林",
            atkUpCD: 5,
            atkUpPer: 50,
            atkType: 2
        }), n.Enemy.set(2004, {
            type: 2,
            baseHp: 135,
            baseAtk: 18,
            icon: 13,
            notice: "红毛巨魔",
            atkUpCD: 5,
            atkUpPer: 50,
            atkType: 3
        }), n.Enemy.set(2005, {
            type: 2,
            baseHp: 125,
            baseAtk: 21,
            icon: 14,
            notice: "纹面兽人",
            atkUpCD: 5,
            atkUpPer: 50,
            atkType: 4
        }), cc._RF.pop()
    }, {}],
    EventType: [function (e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "6d8cdpVZK9Ge5hnIpZuGxMv", "EventType"), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.EventType || (n.EventType = {}))[o.Monster = 1] = "Monster", o[o.Box = 2] = "Box", o[o.Boss = 3] = "Boss", o[o.BigBoss = 4] = "BigBoss", cc._RF.pop()
    }, {}],
    Facebook: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "39879kmYLhHw4epMab4qCfV", "Facebook"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = function () {
            function e() {
            }

            return Object.defineProperty(e, "inst", {
                get: function () {
                    return null == this._inst ? new e : this._inst
                }, enumerable: !0, configurable: !0
            }), e.prototype.getPlayerInfo = function (A) {
                var h = this;
                void 0 === A && (A = function (e) {
                })/*FBInstant.player.getDataAsync(["isFirst", "reviveNum", "money", "extraAttackValue", "attackLevel", "defenseLevel", "hpLevel", "curArmor", "curHp", "curScore", "completeLevelList", "curskills", "propMap"]).then(function (e) {*/
                var e = wxHelper.getLocalData(["isFirst", "reviveNum", "money", "extraAttackValue", "attackLevel", "defenseLevel", "hpLevel", "curArmor", "curHp", "curScore", "completeLevelList", "curskills", "propMap"]);
                console.log("data is loaded", this.node);
                var t = e.isFirst, n = e.reviveNum, o = e.money, a = e.extraAttackValue, l = e.attackLevel,
                    r = e.defenseLevel, i = e.hpLevel, s = e.curArmor, c = e.curHp, p = e.curScore,
                    u = e.completeLevelList, d = e.curskills, v = e.propMap;
                null == o && (t = !0, i = r = l = 1, s = 50, c = 100, p = a = o = n = 0, u = [], d = [], v = "", h.save(t, n, o, a, l, r, i, s, c, p, u, d, v)), A({
                    isFirst: t,
                    reviveNum: n,
                    money: o,
                    extraAttackValue: a,
                    attackLevel: l,
                    defenseLevel: r,
                    hpLevel: i,
                    curArmor: s,
                    curHp: c,
                    curScore: p,
                    completeLevelList: u,
                    curskills: d,
                    propMap: v
                })
                console.log("getPlayerInfo=======")
                /*})*/
            }, e.prototype.save = function (e, t, n, o, a, l, r, i, s, c, p, u, d, v) {
                console.error("=======save======")
                /*void 0 === v && (v = function () {
                })*//*, FBInstant.player.setDataAsync({
                    isFirst: e,
                    reviveNum: t,
                    money: n,
                    extraAttackValue: o,
                    attackLevel: a,
                    defenseLevel: l,
                    hpLevel: r,
                    curArmor: i,
                    curHp: s,
                    curScore: c,
                    completeLevelList: p,
                    curskills: u,
                    propMap: d
                }).then(function () {
                    console.log("data is set"), v()
                })*/
                wxHelper.saveLocalData({
                    isFirst: e,
                    reviveNum: t,
                    money: n,
                    extraAttackValue: o,
                    attackLevel: a,
                    defenseLevel: l,
                    hpLevel: r,
                    curArmor: i,
                    curHp: s,
                    curScore: c,
                    completeLevelList: p,
                    curskills: u,
                    propMap: d
                })
            }, e.prototype.saveIsFirst = function (e, t) {
                void 0 === t && (t = function () {
                }), console.log(e), "undefined" != typeof FBInstant && FBInstant.player.setDataAsync({isFirst: e}).then(function () {
                    console.log("isFirst is set"), t()
                })
            }, e.prototype.savePropMap = function (e, t) {
                void 0 === t && (t = function () {
                }), "undefined" != typeof FBInstant && FBInstant.player.setDataAsync({propMap: e}).then(function () {
                    console.log("propMap is set"), t()
                })
            }, e.prototype.saveReviveNum = function (e, t) {
                void 0 === t && (t = function () {
                }), "undefined" != typeof FBInstant && FBInstant.player.setDataAsync({reviveNum: e}).then(function () {
                    console.log("reviveNum is set"), t()
                })
            }, e.prototype.challengeFriend = function (e, t) {
                var n = this;
                void 0 === e && (e = function () {
                }), void 0 === t && (t = function () {
                }), "undefined" != typeof FBInstant ? FBInstant.context.chooseAsync().then(function () {
                    n.updateAsync(), e()
                }).catch(function (e) {
                    t()
                }) : t()
            }, e.prototype.updateAsync = function () {
                FBInstant.updateAsync({
                    action: "CUSTOM",
                    image: "data:image/jpeg;base64,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TU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0xMS0xOVQxMDoyODozMCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0xMS0yOVQxNTo1OTowMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMTEtMjlUMTU6NTk6MDMrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0YmVlZmE2Ny1hNjI0LTM1NDEtODdmNC1lYmFmY2ZlNzJkZWUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYzhiMzgwYS0wZjE2LWI4NGItOTk5Ni04ZTAzZDY1ZDkxMmUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMGE0MDI0Yy01ZTMwLTY1NDgtODA3OS04ZWJkY2Q0NmZlZTAiIHBob3Rvc2hvcDpMZWdhY3lJUFRDRGlnZXN0PSIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTBhNDAyNGMtNWUzMC02NTQ4LTgwNzktOGViZGNkNDZmZWUwIiBzdEV2dDp3aGVuPSIyMDE4LTExLTE5VDEwOjI4OjMwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NDc5MzEzZC04NzBlLTYxNDctYmM4Ni1hZDY4MTU1ZjNhNzMiIHN0RXZ0OndoZW49IjIwMTgtMTEtMjlUMTU6NTk6MDMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRiZWVmYTY3LWE2MjQtMzU0MS04N2Y0LWViYWZjZmU3MmRlZSIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0yOVQxNTo1OTowMyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MTM1MUY5RUY0RkUzOTQ4MjIyQjcxQUNBQzYzMzczQzc8L3JkZjpsaT4gPHJkZjpsaT4xRTVCRkJDOEUyNjUwMUNFRDAwNkI2OEMzOTMzRkRCQTwvcmRmOmxpPiA8cmRmOmxpPjI2OTU3MEVBOUVGOEREQTY0MzlBRjVGOTkyRkUyQTVCPC9yZGY6bGk+IDxyZGY6bGk+MkNFRkE1MUM3QzIwMjZBMjA1M0M1QkE5REZBNDE4NDM8L3JkZjpsaT4gPHJkZjpsaT4zMDZBMkU3RTA4MkI3MTRBMkRDRjk3NjY3OTg5QTM2QjwvcmRmOmxpPiA8cmRmOmxpPjY0QzQ1MjRERUMxOUQxMjVEOTE4ODAzN0U3N0Y5QjRFPC9yZGY6bGk+IDxyZGY6bGk+Njk4NTgwQ0RCQTQyREI3QzNFRTEwNTZGRkNBMjQ2Q0E8L3JkZjpsaT4gPHJkZjpsaT42QjczQUFGREVCRjcwNjVGODI2MUE0RkQ5NTYzRjE1MjwvcmRmOmxpPiA8cmRmOmxpPjc0Q0M5MzMxQjlGNUNCRDEyOTg5MDk0QkM3QTM5MURGPC9yZGY6bGk+IDxyZGY6bGk+QTUxNTc1NTc2MTlDNUFENjYxNzM5OUM1NkM4Qzg0MzE8L3JkZjpsaT4gPHJkZjpsaT5CNzNGQzhFNTU2MzdCQzE2NkU1N0FGOTZDOTI4NDNCQjwvcmRmOmxpPiA8cmRmOmxpPkI3RkRGNUNDOTRERTgwOTFFNTY0RDcyREUwNjNBM0YwPC9yZGY6bGk+IDxyZGY6bGk+RDEzMTc0NUM2RTIxM0U4RUM4RDM5QzBDOTdCRDM2NEI8L3JkZjpsaT4gPHJkZjpsaT5GRTI3NDZBNTcwREU5MzI4QTJEMDI4QTUwRDg4NkY4MDwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDowYzEyYTk2OS0xMjg4LThjNDQtYWJkOC02YjdhOGYyZGRlNmY8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MTM4MzExMmEtNzUyYi01NDRmLWE0NzgtZThlNWJlNmRmMDViPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE1YzkzOTZjLTI3OTctYjg0OS1hYTI2LTAzYzZiN2U4M2NiYzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYjY1OGMxYy1hMjVkLTQ5NDgtOTIwOC1lYjY0MDhlZjA4NmI8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MjVjMzgwNWYtYTAyMy00YzQzLWFmMTEtMGQxMDZiODYyNmZhPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjRhZjhmZTBiLTZkOGItMTI0OS1iYjc3LTE5MGZlODBiYzhjYjwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MmYzZTVmMi0yM2I4LWY4NDEtOGQzNS00MDBjYmE0M2RkZGY8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NTUzZWI1OTEtYjEzOS03ZDRmLWEzYzctZmQ2ZDljNzRmMGI0PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc1NjdjNzM3LTYzZDctYjQ0OS1hYTBjLTI3Mzg4ZGU4ZjZiZTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ODU1Y2U3Yi0yNmIzLTU0NGMtYjVlMi0yOWVlZDk4N2VmMzc8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YTlmMjA0MmItYWJmMS0zOTQwLWI2ZjEtMTQ5ZGM0NDQ3OTRlPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmI1OWMzMWY1LTE3MDAtNzc0Zi1hZjIwLWE2YWQ0NWU5M2I5MzwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNzY3ZDdmMy00NmIwLWZkNDMtYjAzYi00ZTdjZmYzMWU3YzI8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZGZhZmQ0YTItOWQ5NC0xMWRhLWE4MjYtYzhjYjg2MTJkYTcxPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmUwOTJjY2UxLWRkOTktODc0MC1iZjA3LWJiNThmNzZjMTliNjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MDIwZGNjMmMtN2Y1My05YzRlLTk2NWEtMDQxY2I0OGVhYTk1PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDowNmViNDcyNi00OGI0LWUwNDYtOWVhNy1lOTljYzAwYjJmOTA8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjBhMGM1MDY3LWI3YWItMGE0NS1iNTIyLWVlODBmYmE2MmJiZTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MWViNjE5ZWItYTM0Yi04ODRhLWI1MmItYjU3ODNiODRlM2EwPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo0NzYxZTY4Ni0zNDQzLTE4NGYtODk0MC1iNDA4NGQxZTQwOGY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjQ4QzYxMUE0OUU5NTExRTg5OEQwRjdBRTM3RDEyRDgyPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo1N2E0YmNjZC00YjU5LTJkNDAtOGU5Mi05Njk5YzdmZmYxNDA8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjY1NjcxZTFiLTc3Y2QtMTk0Yy04YjcyLTc4OWQ5NDFhNmY5MjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NmYyOWRkMWYtYTY3Ny1hZjQ1LTkyNzktYTJjYjlhNTEyZDI0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo3MDlmOTc2ZS0wMTc4LWQxNGUtOTU4Yy03MGEzMDJkMjA3YzA8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjk3NmY3YzM5LWIwOWEtYzk0OS04MWY3LWVmNDliODNiM2EyYzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6Q0M5MEFEQjU5NTY5MTFFODlGRTlCNDlEMzlDRTVDNkY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkVEMEExNjU2NzFBOTExRTVBNDIxRTgwNzZDQTU1Q0E5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpjZDY3ZWZmNS01ZDFlLTFlNGQtOWViNy1jM2E5MjYxZWFkY2U8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOmQzMDZmOWQzLWI4OWItMTI0NS05ZDQ2LTg2ZjZlZDBlZjFmMTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6ZDdkNjgwNDUtNjEzOS1mMTQ0LWIxZDktZTAyYzk1ODk4MzIxPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpmMmIyMDhlNy0yYTVjLWQ3NGUtOGVmYy1hYzRiMmZlYTk1NDY8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
                    text: FBInstant.player.getName() + " just played Gem Legend. Now it's your turn!",
                    template: "play_turn"
                }).then(function () {
                    console.log("update suc!")
                }).catch(function (e) {
                    console.log("update fail!"), console.error(e)
                })
            }, e.prototype.share = function (t) {
                // this.genSharePic(t, function (e) {
                //     FBInstant.shareAsync({
                //         intent: "SHARE",
                //         image: e,
                //         text: FBInstant.player.getName() + " just reached level " + t + " in Gem Legend!"
                //     }).then(function () {
                //         FBInstant.logEvent("share_success")
                //     }).catch(function (e) {
                //         console.log(e)
                //     })
                // })
                uiManager.shareMessage()
            }, e.prototype.genSharePic = function (t, n) {
                var o = document.createElement("canvas");
                o.id = "shareCanvas", o.width = 600, o.height = 315;
                var a = o.getContext("2d"), l = new Image;
                l.crossOrigin = "anonymous", l.src = FBInstant.player.getPhoto(), l.onload = function () {
                    var e = new Image;
                    e.src = "res/raw-assets/resource/Texture/gemlegend.jpg", e.onload = function () {
                        a.drawImage(e, 0, 0, o.width, o.height), a.beginPath(), a.arc(125, 125, 80, 0, 2 * Math.PI, !1), a.fillStyle = "white", a.fill(), a.closePath(), a.save(), a.beginPath(), a.arc(125, 125, 75, 0, 2 * Math.PI, !1), a.clip(), a.stroke(), a.closePath(), a.drawImage(l, 50, 50, 150, 150), a.restore(), a.font = "65px Paytone One", a.fillStyle = "white", a.textAlign = "center", a.lineWidth = 8, a.fillText(t.toString(), 475, 175), a.font = "35px Paytone One", a.fillText("LEVEL", 475, 100), n(o.toDataURL()), o = null
                    }
                }
            }, e._inst = null, e
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    FluxayEffect: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "313e4qL+CJPDJZMyimBiBEb", "FluxayEffect"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./FluxayFrag"), a = cc._decorator, l = a.ccclass, r = a.property, i = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.mode = 1, e.fragStr = null, e.startTime = Date.now(), e.time = 0, e
            }

            return __extends(e, t), e.prototype.onLoad = function () {
                0 == this.mode ? this.fragStr = o.default.fluxay_frag : this.fragStr = o.default.fluxay_frag_super, this.useWater()
            }, e.prototype.start = function () {
                this.offset = 100 * Math.random()
            }, e.prototype.useWater = function () {
                if (this.program = new cc.GLProgram, cc.sys.isNative ? this.program.initWithString(o.default.fluxay_vert, this.fragStr) : (this.program.initWithVertexShaderByteArray(o.default.fluxay_vert, this.fragStr), this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION), this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR), this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS)), this.program.link(), this.program.updateUniforms(), this.program.use(), cc.sys.isNative) {
                    cc.GLProgramState.getOrCreateWithGLProgram(this.program).setUniformFloat("time", this.time)
                } else {
                    var e = this.program.getUniformLocationForName("time");
                    this.program.setUniformLocationWith1f(e, this.time)
                }
                this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program)
            }, e.prototype.reset = function () {
                this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program)
            }, e.prototype.setProgram = function (e, t) {
                if (cc.sys.isNative) {
                    var n = cc.GLProgramState.getOrCreateWithGLProgram(t);
                    e.setGLProgramState(n)
                } else e.setShaderProgram(t)
            }, e.prototype.update = function (e) {
                if (this.time = (Date.now() - this.startTime) / 1e3 + this.offset, this.program) if (this.program.use(), cc.sys.isNative) {
                    cc.GLProgramState.getOrCreateWithGLProgram(this.program).setUniformFloat("time", this.time)
                } else {
                    var t = this.program.getUniformLocationForName("time");
                    this.program.setUniformLocationWith1f(t, this.time)
                }
            }, __decorate([r], e.prototype, "mode", void 0), e = __decorate([l], e)
        }(cc.Component);
        n.default = i, cc._RF.pop()
    }, {"./FluxayFrag": "FluxayFrag"}],
    FluxayFrag: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "332055FU+REcYk7L5FK9/ed", "FluxayFrag"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = function () {
            function e() {
            }

            return e.fluxay_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ", e.fluxay_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    varying vec2 v_texCoord;\n    uniform float time;\n    void main()\n    {\n        vec4 src_color = texture2D(CC_Texture0, v_texCoord).rgba;\n\n        float width = 0.02;       //流光的宽度范围 (调整该值改变流光的宽度)\n        float start = tan(time/1.414);  //流光的起始x坐标\n        float strength = 0.006;   //流光增亮强度   (调整该值改变流光的增亮强度)\n        float offset = 0.5;      //偏移值         (调整该值改变流光的倾斜程度)\n        if( v_texCoord.x < (start - offset * v_texCoord.y) &&  v_texCoord.x > (start - offset * v_texCoord.y - width))\n        {\n            vec3 improve = strength * vec3(255, 255, 255);\n            vec3 result = improve * vec3( src_color.r, src_color.g, src_color.b);\n            gl_FragColor = vec4(result, src_color.a);\n\n        }else{\n            gl_FragColor = src_color;\n        }\n    }\n    ", e.fluxay_frag_s = "\n    #ifdef GL_ES                                 \n    precision mediump float;                          \n    #endif                                          \n    \n    varying vec4 v_fragmentColor;                  \n    varying vec2 v_texCoord;                      \n    \n    // uniform float factor;  \n    // uniform float width;  \n    uniform float time;  \n    // uniform vec3 color; \n    void main()                                      \n    {   \n        float factor = .06;\n        float width = .02;\n        // float offset = .5;\n        vec3 color = vec3(10.,10.,10.);                                           \n        vec4 texColor = texture2D(CC_Texture0, v_texCoord);  \n    \n        float distance = abs(v_texCoord[0]+v_texCoord[1]-tan(time))/1.414;   \n\n        distance = 1.0-(1.0/width)*distance;  \n        distance = max(distance, 0.0);  \n        vec4 sample = vec4(0.0,0.0,0.0,0.0);  \n        sample[0] = color[0] * distance;  \n        sample[1] = color[1] * distance;  \n        sample[2] = color[2] * distance;  \n        sample[3] = distance;  \n\n        float alpha = sample[3]*texColor[3];  \n        texColor[0] = texColor[0] + sample[0]*alpha*factor;  \n        texColor[1] = texColor[1] + sample[1]*alpha*factor;  \n        texColor[2] = texColor[2] + sample[2]*alpha*factor;  \n        gl_FragColor = v_fragmentColor * texColor;  \n    }\n     ", e.fluxay_frag_super = "\n    #define TAU 6.120470874064187\n    #define MAX_ITER 5\n    uniform float time; \n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n    {\n        float time = time * .5+5.;\n        // uv should be the 0-1 uv of texture...\n        vec2 uv = v_texCoord.xy;//fragCoord.xy / iResolution.xy;\n        \n\n        vec2 p = mod(uv*TAU, TAU)-250.0;\n\n        vec2 i = vec2(p);\n        float c = 1.0;\n        float inten = .0045;\n\n        for (int n = 0; n < MAX_ITER; n++) \n        {\n            float t =  time * (1.0 - (3.5 / float(n+1)));\n            i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(1.5*t + i.x));\n            c += 1.0/length(vec2(p.x / (cos(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));\n        }\n        c /= float(MAX_ITER);\n        c = 1.17-pow(c, 1.4);\n        vec4 tex = texture2D(CC_Texture0,uv);\n        vec3 colour = vec3(pow(abs(c), 20.0));\n        colour = clamp(colour + vec3(0.0, 0.0, .0), 0.0, tex.a);\n\n        // 混合波光\n        float alpha = c*tex[3];  \n        tex[0] = tex[0] + colour[0]*alpha; \n        tex[1] = tex[1] + colour[1]*alpha; \n        tex[2] = tex[2] + colour[2]*alpha; \n        fragColor = v_fragmentColor * tex;\n    }\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ", e
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    GameManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fb716gReGRFG4DwfgvPnVeL", "GameManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./ItemManager"), a = e("./CalculationManager"), l = e("./BossSkillManager"), r = e("./PropManager"),
            i = e("./AudioManager"), s = e("../UI/UIPanelController"), c = e("../UI/LevelPanel"),
            p = e("../charactor/PlayerInfo"), u = e("../Pool/PropPool"), d = e("../Pool/ItemPool"),
            v = e("../Pool/NumPool"), A = e("../Pool/MonsterAttackPool"), h = e("../Pool/AttackEffectPool"),
            m = e("../Pool/MonsterDeadPool"), y = e("../Pool/ArrowPool"), I = e("../Pool/LevelInfoPool"),
            f = e("../UI/Icons"), P = e("../UI/GameOverPanel"), g = e("../Data/LevelInfo"),
            k = e("../Model/LevelBossInfo"), T = e("../Platform/PersistentManager"), C = e("./AdManager"),
            S = cc._decorator, b = S.ccclass, U = S.property, L = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.itemManager = null, e.calculationManager = null, e.bossSkillManager = null, e.audioManager = null, e.uiPanelController = null, e.playerInfo = null, e.propPool = null, e.itemPool = null, e.numPool = null, e.monsterAttackPool = null, e.attackEffectPool = null, e.monsterDeadPool = null, e.arrowPool = null, e.levelInfoPool = null, e.propManager = null, e.icons = null, e.gamePanel = null, e.loginPanel = null, e.levelPanel = null, e.gameOverPanel = null, e.levelBoss = null, e.baseUrl = "https://zouzhifeng.xyz/matchx/", e
                }

                return __extends(e, t), (n = e).prototype.start = function () {
                    null == n.inst && (n.inst = this), this.audioManager.playBGAudio(), this.showLoginPanel(!0), this.showGamePanel(!1), this.showLevelPanel(!1), this.showGameOverPanel(!1)
                }, e.prototype.login = function () {
                    var e = this;
                    C.default.inst.preload(), C.default.inst.preloadVideo(), T.default.inst.init(function () {
                        return e.initCallback()
                    }), this.showLoginPanel(!1)
                }, e.prototype.initCallback = function () {
                    this.initPool(), this.itemManager.init(), this.bossSkillManager.init(), this.calculationManager.init(), this.levelPanel.init(), this.showLevelPanel(!0)
                }, e.prototype.initPool = function () {
                    this.propPool.InitPropPool(), this.itemPool.InitPool(), this.numPool.InitPool(), this.monsterAttackPool.InitPool(), this.attackEffectPool.InitPool(), this.monsterDeadPool.InitPool(), this.arrowPool.InitPool(), this.levelInfoPool.InitPool()
                }, e.prototype.clearPool = function () {
                    this.propPool.ClearPool(), this.itemPool.ClearPool(), this.numPool.ClearPool(), this.monsterAttackPool.ClearPool(), this.attackEffectPool.ClearPool(), this.monsterDeadPool.ClearPool(), this.arrowPool.ClearPool(), this.levelInfoPool.ClearPool()
                }, e.prototype.showGamePanel = function (e) {
                    if (this.gamePanel.active = e) {
                        var t = g.LevelInfo.get(p.PlayerData.curLevel).bg;
                        this.gamePanel.children[0].children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.icons.levelBg[t]
                    }
                }, e.prototype.showLoginPanel = function (e) {
                    this.loginPanel.active = e
                }, e.prototype.showLevelPanel = function (e, t) {
                    void 0 === t && (t = !1), this.levelPanel.node.active = e, t ? (n.inst.playerInfo.pushCompleteLevel(p.PlayerData.curLevel), this.levelPanel.refreshLevel(), T.default.inst.save(!1)) : this.levelPanel.deleteEvent()
                }, e.prototype.showGameOverPanel = function (e, t) {
                    void 0 === t && (t = !1), (this.gameOverPanel.node.active = e) && this.gameOverPanel.Init(t)
                }, e.prototype.showLevelBoss = function (e, t) {
                    (this.levelBoss.active = e) && this.levelBoss.getComponent(k.default).init(t)
                }, __decorate([U(o.ItemManager)], e.prototype, "itemManager", void 0), __decorate([U(a.default)], e.prototype, "calculationManager", void 0), __decorate([U(l.default)], e.prototype, "bossSkillManager", void 0), __decorate([U(i.default)], e.prototype, "audioManager", void 0), __decorate([U(s.default)], e.prototype, "uiPanelController", void 0), __decorate([U(p.default)], e.prototype, "playerInfo", void 0), __decorate([U(u.default)], e.prototype, "propPool", void 0), __decorate([U(d.default)], e.prototype, "itemPool", void 0), __decorate([U(v.default)], e.prototype, "numPool", void 0), __decorate([U(A.default)], e.prototype, "monsterAttackPool", void 0), __decorate([U(h.default)], e.prototype, "attackEffectPool", void 0), __decorate([U(m.default)], e.prototype, "monsterDeadPool", void 0), __decorate([U(y.default)], e.prototype, "arrowPool", void 0), __decorate([U(I.default)], e.prototype, "levelInfoPool", void 0), __decorate([U(r.default)], e.prototype, "propManager", void 0), __decorate([U(f.default)], e.prototype, "icons", void 0), __decorate([U(cc.Node)], e.prototype, "gamePanel", void 0), __decorate([U(cc.Node)], e.prototype, "loginPanel", void 0), __decorate([U(c.default)], e.prototype, "levelPanel", void 0), __decorate([U(P.default)], e.prototype, "gameOverPanel", void 0), __decorate([U(cc.Node)], e.prototype, "levelBoss", void 0), e = n = __decorate([b], e);
                var n
            }(cc.Component);
        n.default = L, cc._RF.pop()
    }, {
        "../Data/LevelInfo": "LevelInfo",
        "../Model/LevelBossInfo": "LevelBossInfo",
        "../Platform/PersistentManager": "PersistentManager",
        "../Pool/ArrowPool": "ArrowPool",
        "../Pool/AttackEffectPool": "AttackEffectPool",
        "../Pool/ItemPool": "ItemPool",
        "../Pool/LevelInfoPool": "LevelInfoPool",
        "../Pool/MonsterAttackPool": "MonsterAttackPool",
        "../Pool/MonsterDeadPool": "MonsterDeadPool",
        "../Pool/NumPool": "NumPool",
        "../Pool/PropPool": "PropPool",
        "../UI/GameOverPanel": "GameOverPanel",
        "../UI/Icons": "Icons",
        "../UI/LevelPanel": "LevelPanel",
        "../UI/UIPanelController": "UIPanelController",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./AdManager": "AdManager",
        "./AudioManager": "AudioManager",
        "./BossSkillManager": "BossSkillManager",
        "./CalculationManager": "CalculationManager",
        "./ItemManager": "ItemManager",
        "./PropManager": "PropManager"
    }],
    GameOverPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0dbcbUwNntIOqdcynjx5KLi", "GameOverPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./UIPanelController"), a = e("../charactor/PlayerInfo"), l = e("../Manager/GameManager"),
            r = e("../Model/LevelBossInfo"), i = e("../Eume/LevelType "), s = e("../Manager/ItemManager"),
            c = e("../Platform/PersistentManager"), p = cc._decorator, u = p.ccclass, d = p.property, v = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameOverPanel = null, e.gameover = null, e.victory = null, e.black = null, e.light = null, e.title = null, e.gameoverRestartBtn = null, e.advBtn = null, e.victoryRestartBtn = null, e.bg = null, e.overTitle = null, e.victoryTitle = null, e.isGameOver = !1, e.lightAction = null, e
                }

                return __extends(e, t), e.prototype.Init = function (e) {
                    this.setGameOver(!0), l.default.inst.gamePanel.active && l.default.inst.uiPanelController.treasureBoxPrizePanel.propPrizePanel.active && (l.default.inst.uiPanelController.treasureBoxPrizePanel.propPrizePanel.active = !1), this.gameOverPanel.active = !0, this.gameover.active = !e, this.victory.active = e, (this.light.active = e) ? (this.title.spriteFrame = this.victoryTitle, this.black.opacity = 148, l.default.inst.audioManager.playVictory(), this.PlayEffect()) : (this.title.spriteFrame = this.overTitle, this.black.opacity = 200, l.default.inst.audioManager.playLost()), 0 < a.PlayerData.reviveNum ? (this.advBtn.interactable = !1, this.advBtn.node.color = cc.Color.GRAY) : (this.advBtn.interactable = !0, this.advBtn.node.color = cc.Color.WHITE), this.gameoverRestartBtn.node.on("click", this.ClickRestart, this), this.victoryRestartBtn.node.on("click", this.ClickRestart, this), this.advBtn.node.on("click", this.ClickAdv, this)
                }, e.prototype.PlayEffect = function () {
                    this.lightAction = cc.repeatForever(cc.rotateBy(10, 360)), this.light.runAction(this.lightAction)
                }, e.prototype.setGameOver = function (e) {
                    this.isGameOver = e
                }, e.prototype.getGameOver = function () {
                    return this.isGameOver
                },  e.prototype.RemoveEvent = function () {
                    this.setGameOver(!1), null != this.lightAction && (this.light.stopAction(this.lightAction), this.lightAction = null), this.gameoverRestartBtn.node.off("click", this.ClickRestart, this), this.victoryRestartBtn.node.off("click", this.ClickRestart, this), this.advBtn.node.off("click", this.ClickAdv, this)
                }, e.prototype.ClickRestart = function () {
                    this.RemoveEvent(), a.PlayerData.curLevelType == i.LevelType.boss && l.default.inst.levelBoss.getComponent(r.default).deleteEvent(), this.gameOverPanel.active = !1, null == o.default.instance && l.default.inst.uiPanelController.init(), o.default.instance.ClickRestart()
                }, e.prototype.ClickAdv = function () {
                    var t = this;
                    // c.default.inst.challengeFriend(function () {
                    //     s.ItemManager.inst.resettingParam(), t.RemoveEvent(), t.gameOverPanel.active = !1;
                    //     var e = Math.round(.5 * a.PlayerData.maxHp);
                    //     l.default.inst.playerInfo.ChangeHp(e), l.default.inst.playerInfo.ChangeReviveNum(), c.default.inst.saveReviveNum(a.PlayerData.reviveNum);
                    //     // FBInstant.logEvent("challenge_success")
                    // }, function () {
                    //     // FBInstant.logEvent("challenge_fail")
                    // })
                    wxHelper.showVideoAd(function () {
                        s.ItemManager.inst.resettingParam(), t.RemoveEvent(), t.gameOverPanel.active = !1;
                        var e = Math.round(1 * a.PlayerData.maxHp);
                        l.default.inst.playerInfo.ChangeHp(e), l.default.inst.playerInfo.ChangeReviveNum(), c.default.inst.saveReviveNum(a.PlayerData.reviveNum);
                        // FBInstant.logEvent("challenge_success")
                    }, function () {
                        // FBInstant.logEvent("challenge_fail")
                    })
                }, e.prototype.update = function () {
                }, __decorate([d(cc.Node)], e.prototype, "gameOverPanel", void 0), __decorate([d(cc.Node)], e.prototype, "gameover", void 0), __decorate([d(cc.Node)], e.prototype, "victory", void 0), __decorate([d(cc.Node)], e.prototype, "black", void 0), __decorate([d(cc.Node)], e.prototype, "light", void 0), __decorate([d(cc.Sprite)], e.prototype, "title", void 0), __decorate([d(cc.Button)], e.prototype, "gameoverRestartBtn", void 0), __decorate([d(cc.Button)], e.prototype, "advBtn", void 0), __decorate([d(cc.Button)], e.prototype, "victoryRestartBtn", void 0), __decorate([d(cc.Sprite)], e.prototype, "bg", void 0), __decorate([d(cc.SpriteFrame)], e.prototype, "overTitle", void 0), __decorate([d(cc.SpriteFrame)], e.prototype, "victoryTitle", void 0), e = __decorate([u], e)
            }(cc.Component);
        n.default = v, cc._RF.pop()
    }, {
        "../Eume/LevelType ": "LevelType ",
        "../Manager/GameManager": "GameManager",
        "../Manager/ItemManager": "ItemManager",
        "../Model/LevelBossInfo": "LevelBossInfo",
        "../Platform/PersistentManager": "PersistentManager",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./UIPanelController": "UIPanelController"
    }],
    HelpPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6460dBUkIRP3r21UUulcQF3", "HelpPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.black = null, e.panel = null, e.content = null, e.arrowRight = null, e.arrowLeft = null, e.page = 0, e.closeCallback = null, e
            }

            return __extends(e, t), e.prototype.init = function (e) {
                void 0 === e && (e = null), this.closeCallback = e, this.page = 0, this.arrowLeft.node.color = cc.Color.GRAY, this.refreshPanel(), this.showMenuPanel()
            }, e.prototype.close = function () {
                this.hideMenuPanel()
            }, e.prototype.hideMenuPanel = function () {
                var e = this, t = cc.callFunc(function () {
                    e.node.active = !1, null != e.closeCallback && e.closeCallback()
                }), n = new cc.Vec2(0, 1920), o = cc.sequence(cc.moveTo(.6, n), t);
                o.easing(cc.easeInOut(3)), this.panel.runAction(o);
                var a = cc.fadeTo(.6, 0);
                this.black.runAction(a)
            }, e.prototype.showMenuPanel = function () {
                this.node.active = !0;
                var e = cc.callFunc(function () {
                }), t = cc.sequence(cc.moveTo(.6, cc.Vec2.ZERO), e);
                t.easing(cc.easeInOut(3)), this.panel.runAction(t);
                var n = cc.fadeTo(.6, 128);
                this.black.runAction(n)
            }, e.prototype.clickRight = function () {
                this.page != this.content.childrenCount - 1 && (this.page++, this.arrowLeft.node.color = cc.Color.WHITE, this.page < this.content.childrenCount - 1 ? this.arrowRight.node.color = cc.Color.WHITE : (this.page = this.content.childrenCount - 1, this.arrowRight.node.color = cc.Color.GRAY), this.refreshPanel())
            }, e.prototype.clickLeft = function () {
                0 != this.page && (this.page--, this.arrowRight.node.color = cc.Color.WHITE, 0 < this.page ? this.arrowLeft.node.color = cc.Color.WHITE : (this.page = 0, this.arrowLeft.node.color = cc.Color.GRAY), this.refreshPanel())
            }, e.prototype.refreshPanel = function () {
                for (var e = 0; e < this.content.childrenCount; e++) {
                    var t = this.content.children[e];
                    e == this.page ? t.active = !0 : t.active = !1
                }
            }, __decorate([l(cc.Node)], e.prototype, "black", void 0), __decorate([l(cc.Node)], e.prototype, "panel", void 0), __decorate([l(cc.Node)], e.prototype, "content", void 0), __decorate([l(cc.Button)], e.prototype, "arrowRight", void 0), __decorate([l(cc.Button)], e.prototype, "arrowLeft", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    Icons: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "1d7c8RNPmlBwZHUbaA7OYtT", "Icons"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemBgIcons = [], e.itemSelectBgIcons = [], e.skillIcons = [], e.skillSelectIcons = [], e.propIcons = [], e.propSelectIcons = [], e.monsterThrow = [], e.levelBg = [], e.levelBossThrow = [], e.levelItems = [], e.monsterImage = [], e.showValueType = [], e.itemSpecialIcon = [], e
            }

            return __extends(e, t), __decorate([l([cc.SpriteFrame])], e.prototype, "itemBgIcons", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "itemSelectBgIcons", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "skillIcons", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "skillSelectIcons", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "propIcons", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "propSelectIcons", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "monsterThrow", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "levelBg", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "levelBossThrow", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "levelItems", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "monsterImage", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "showValueType", void 0), __decorate([l([cc.SpriteFrame])], e.prototype, "itemSpecialIcon", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    InputManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6a936rjOx5C3aahEW+ylMe/", "InputManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = (o.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return __extends(t, e), (n = t).prototype.init = function () {
                null == n.inst ? n.inst = this : this.node.destroy()
            }, t.prototype.setListeners = function (e, t, n) {
                this.touchLeft = e, this.touchRight = t, this.touchEnd = n
            }, t.prototype.onTouchStart = function (e) {
                e.getLocationX() <= cc.view.getDesignResolutionSize().width / 2 ? this.touchLeft() : this.touchRight()
            }, t.prototype.onTouchEnd = function (e) {
                this.touchEnd()
            }, t = n = __decorate([a], t);
            var n
        }(cc.Component));
        n.InputManager = l, cc._RF.pop()
    }, {}],
    ItemGroup: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "265806t6kZL0YSQeCK/aCBv", "ItemGroup"), Object.defineProperty(n, "__esModule", {value: !0}), n.ItemGroup = [{
            groupId: 200001,
            itemId: 10001,
            weight: 10
        }, {groupId: 200001, itemId: 10002, weight: 10}, {groupId: 200001, itemId: 10003, weight: 10}, {
            groupId: 200001,
            itemId: 10004,
            weight: 10
        }, {groupId: 200001, itemId: 10005, weight: 10}, {groupId: 200001, itemId: 10006, weight: 10}, {
            groupId: 200001,
            itemId: 10007,
            weight: 10
        }, {groupId: 200001, itemId: 10008, weight: 10}, {groupId: 200001, itemId: 10009, weight: 10}, {
            groupId: 200001,
            itemId: 10010,
            weight: 10
        }, {groupId: 200001, itemId: 10011, weight: 10}, {groupId: 200001, itemId: 10012, weight: 10}], cc._RF.pop()
    }, {}],
    ItemInfo: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "79255FfFL9Afp7b6VZT2RlS", "ItemInfo"), Object.defineProperty(n, "__esModule", {value: !0});
        var u = function () {
            this.skillId = 0, this.skillCD = 0, this.curSkillCD = 0
        };
        n.MonsterSkill = u;
        var c = function () {
            this.curStatus = 0, this.statusCD = -1
        };
        n.SpecialStatus = c;
        var o = cc._decorator, a = o.ccclass, l = (o.property, e("../Eume/EventType")),
            r = e("../UI/UIPanelController"), y = e("../Manager/ItemManager"), d = e("../Data/EnemySkill"),
            i = e("../Eume/BossSkillType"), I = e("../Manager/GameManager"), v = e("../Data/Enemy"), s = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.status = 0, e.monsterSkillList = [], e.step = 0, e.damageNum = 0, e.animCtrl = null, e
                }

                return __extends(e, t), e.prototype.initItem = function (e, t, n, o, a, l, r, i) {
                    this.id = e, this.type = t, this.status = n, this.monsterId = o, this.monsterHp = a, this.monsterMaxHp = l, this.monsterDamage = r, this.eventType = i, this.monsterSkillList = [], this.damageNum = 0;
                    var s = new c;
                    s.curStatus = 0, s.statusCD = -1, this.setSpecialStatus(s), this.showShadow(!1), this.showKillIcon(!1), this.showBurnIcon(!1)
                }, e.prototype.initMonster = function (e, t, n, o, a, l) {
                    if (void 0 === l && (l = []), this.monsterId = e, this.monsterHp = t - 3, this.monsterMaxHp = n, this.monsterDamage = o, this.eventType = a, this.monsterSkillList = [], 0 < e) {
                        var r = new u;
                        r.skillId = 9e3, r.skillCD = v.Enemy.get(e).atkUpCD, r.curSkillCD = v.Enemy.get(e).atkUpCD, this.monsterSkillList.push(r)
                    }
                    for (var i = 0; i < l.length; i++) {
                        var s = l[i], c = d.EnemySkill.get(s), p = new u;
                        p.skillId = s, p.skillCD = c.skillCD, p.curSkillCD = 0, this.monsterSkillList.push(p)
                    }
                    (this.damageNum = 0) < this.monsterId && 0 < this.monsterHp ? (this.showHpAndAtk(!0), this.refreshAtk(), this.refreshHp()) : this.showHpAndAtk(!1)
                }, e.prototype.setBossStep = function (e) {
                    this.step = e
                }, e.prototype.setSpecialStatus = function (e) {
                    this.specialStatus = e;
                    var t = this.node.getChildByName("icon").getChildByName("special");
                    this.node.getChildByName("icon").getChildByName("icon");
                    if (0 < e.curStatus) if (1 == e.curStatus) t.active = !0, t.getComponent(cc.Sprite).spriteFrame = I.default.inst.icons.itemSpecialIcon[0]; else if (2 == e.curStatus) t.active = !0, t.getComponent(cc.Sprite).spriteFrame = I.default.inst.icons.itemSpecialIcon[1]; else {
                        this.showBurnIcon(!0), t.active = !1, this.animCtrl = this.node.getChildByName("fire").getComponent(cc.Animation), this.animCtrl.getAnimationState("fire").wrapMode = cc.WrapMode.Loop;
                        var n = Math.random();
                        this.animCtrl.play("fire", n)
                    } else t.active = !1
                }, e.prototype.hideBurnStatus = function () {
                    null != this.animCtrl && (this.animCtrl.stop("fire"), this.animCtrl = null), this.showBurnIcon(!1)
                }, e.prototype.showBurnIcon = function (e) {
                    this.node.getChildByName("fire").active = e
                }, e.prototype.getSpecialStatus = function () {
                    return this.specialStatus
                }, e.prototype.getSkillList = function () {
                    return this.monsterSkillList
                }, e.prototype.setId = function (e) {
                    this.id = e
                }, e.prototype.getId = function () {
                    return this.id
                }, e.prototype.setType = function (e) {
                    this.type = e
                }, e.prototype.getType = function () {
                    return this.type
                }, e.prototype.setStatus = function (e) {
                    this.status = e
                }, e.prototype.getStatus = function () {
                    return this.status
                }, e.prototype.getEventType = function () {
                    return this.eventType
                }, e.prototype.setMonsterId = function (e) {
                    this.monsterId = e
                }, e.prototype.getMonsterId = function () {
                    return this.monsterId
                }, e.prototype.setBrambleDamage = function (e, t) {
                    var n = this;
                    void 0 === t && (t = null), this.monsterHp += e, this.monsterHp < 0 && (this.monsterHp = 0), this.playHPAnimation(e, 1, this.eventType, function (e) {
                        if (0 == n.monsterHp) {
                            if (I.default.inst.audioManager.playMonsterDie(n.monsterId), e >= l.EventType.Boss && y.ItemManager.inst.checkBossListActive(n.step), e == l.EventType.BigBoss && y.ItemManager.inst.setBigBossIsDead(!0), y.ItemManager.inst.getBigBossIsDead() && 0 == y.ItemManager.inst.checkAliveMonster()) return void r.default.instance.skillPrizePanel.InitPanel();
                            y.ItemManager.inst.removeAgnailDeadMonster(n.node, function () {
                                null != t && t()
                            })
                        } else null != t && t()
                    }), this.refreshHp(), 0 == this.monsterHp && this.eventType >= l.EventType.Boss && y.ItemManager.inst.checkBossSkill(this.node, i.BossSkillType.AuraSkill, !0)
                }, e.prototype.playHPAnimation = function (e, t, n, o) {
                    var a = 1 < t,
                        l = I.default.inst.numPool.CreateItem(y.ItemManager.inst.showValueHierarchy, this.node.position, e, a),
                        r = l.getChildByName("violent"), i = l.getChildByName("num");
                    r.scale = 0, i.scale = 0;
                    var s = 1;
                    if (2 == t) {
                        for (var c = 0; c < i.childrenCount; c++) {
                            i.children[c].color = cc.color(255, 120, 120, 255)
                        }
                        s = 1.15
                    } else if (4 == t) {
                        for (c = 0; c < i.childrenCount; c++) {
                            i.children[c].color = cc.color(255, 60, 60, 255)
                        }
                        s = 1.3
                    }
                    var p = cc.callFunc(function (e) {
                        for (var t = 0; t < i.childrenCount; t++) {
                            i.children[t].color = cc.Color.WHITE
                        }
                        r.scale = 0, i.scale = 1, I.default.inst.numPool.PutItem(e), null != o && o(n)
                    }, this);
                    if (a) {
                        var u = cc.scaleTo(.6, s);
                        i.runAction(u)
                    } else i.scale = 1;
                    var d = cc.scaleTo(.3, 1.8);
                    r.runAction(d);
                    var v = [], A = new cc.Vec2(this.node.position.x + 60, this.node.position.y + 120),
                        h = new cc.Vec2(this.node.position.x + 100, this.node.position.y + 20);
                    v.push(this.node.position), v.push(A), v.push(h);
                    var m = cc.sequence(cc.bezierTo(.6, v), p);
                    m.easing(cc.easeOut(3)), l.runAction(m)
                }, e.prototype.setMonsterHp = function (e, t, n) {
                    var o = this;
                    void 0 === t && (t = 1), void 0 === n && (n = !1);
                    var a = this.monsterHp;
                    this.monsterHp = e, e < 0 ? this.monsterHp < 0 ? (this.monsterHp = 0, this.damageNum = a) : this.damageNum = -e : this.monsterHp > this.monsterMaxHp && (this.monsterHp = this.monsterMaxHp), this.playHPAnimation(e, t, this.eventType, function (e) {
                        0 == o.monsterHp && (I.default.inst.audioManager.playMonsterDie(o.monsterId), e >= l.EventType.Boss && y.ItemManager.inst.checkBossListActive(o.step)), e == l.EventType.BigBoss && 0 == o.monsterHp && y.ItemManager.inst.setBigBossIsDead(!0), y.ItemManager.inst.getBigBossIsDead() && 0 == y.ItemManager.inst.checkAliveMonster() && r.default.instance.skillPrizePanel.InitPanel()
                    }), this.refreshHp(), this.eventType >= l.EventType.Boss && n && (0 == this.monsterHp ? y.ItemManager.inst.checkBossSkill(this.node, i.BossSkillType.AuraSkill, !0) : 0 < this.monsterId && y.ItemManager.inst.checkBossSkill(this.node, i.BossSkillType.AttackedPassiveSkill))
                }, e.prototype.getMonsterHp = function () {
                    return this.monsterHp
                }, e.prototype.setMonsterMaxHp = function (e) {
                    this.monsterMaxHp = e
                }, e.prototype.getMonsterMaxHp = function () {
                    return this.monsterMaxHp
                }, e.prototype.getMonsterLossHp = function () {
                    return this.monsterMaxHp - this.monsterHp
                }, e.prototype.setMonsterDamage = function (e) {
                    this.monsterDamage = e, this.refreshAtk()
                }, e.prototype.getMonsterDamage = function () {
                    return this.monsterDamage
                }, e.prototype.getDamageNum = function () {
                    return this.damageNum
                }, e.prototype.refreshHp = function () {
                    this.node.getChildByName("icon_blood").children[0].getComponent("cc.Label").string = this.monsterHp.toString()
                }, e.prototype.refreshAtk = function () {
                    this.node.getChildByName("icon_gongjili").children[0].getComponent("cc.Label").string = this.monsterDamage.toString()
                }, e.prototype.showHpAndAtk = function (e) {
                    this.node.getChildByName("icon_blood").active = e, this.node.getChildByName("icon_gongjili").active = e
                }, e.prototype.showShadow = function (e) {
                    this.node.children[0].active = e
                }, e.prototype.setIcon = function (e) {
                    this.node.getChildByName("icon").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = e
                }, e.prototype.showKillIcon = function (e) {
                    this.node.getChildByName("kill").active = e
                }, e = __decorate([a], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {
        "../Data/Enemy": "Enemy",
        "../Data/EnemySkill": "EnemySkill",
        "../Eume/BossSkillType": "BossSkillType",
        "../Eume/EventType": "EventType",
        "../Manager/GameManager": "GameManager",
        "../Manager/ItemManager": "ItemManager",
        "../UI/UIPanelController": "UIPanelController"
    }],
    ItemManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "a6e95jouLZH9YpSCbIjxobU", "ItemManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = function () {
            this.step = 0, this.bossId = 0, this.skillList = []
        };
        n.normalBossInfo = o;
        var P = e("../Model/ItemInfo"), D = e("../Eume/ItemType"), R = e("../Eume/EventType"),
            g = e("./CalculationManager"), x = e("../charactor/PlayerInfo"), p = e("../Data/EnemyGroup"),
            a = e("../Data/Level"), M = e("../Data/LevelInfo"), N = e("../Data/Enemy"),
            k = e("../Eume/EliminationType"), w = e("../UI/UIPanelController"), s = e("./BossSkillManager"),
            v = e("../Data/EnemySkill"), O = e("../Eume/BossSkillType"), c = e("../Data/Conect"),
            H = e("./GameManager"), T = e("../Eume/LevelType "), C = e("../Model/LevelBossInfo"),
            l = e("../UI/HelpPanel"), u = e("../Platform/PersistentManager"), r = cc._decorator, d = r.ccclass,
            A = r.property, i = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.image = [], e.pickImage = [], e.item = null, e.itemParent = null, e.showValue = null, e.moveEffect = null, e.lineHierarchy = null, e.showValueHierarchy = null, e.bossList = null, e.normalBossPanel = null, e.normalBossInfo = null, e.normalPanelBg = null, e.normalPanelBlack = null, e.helpPanel = null, e.sumStep = 0, e.eventStep = 0, e.times = 0, e.temp = !1, e.stop = !0, e.create = !0, e.num = 3, e.istouch = !0, e.curChooseType = k.EliminationType.Shield, e.Screen_w = 0, e.Screen_h = 0, e.pix_w = 160, e.pix_h = 160, e.interval = 0, e.offset_x = -5, e.offset_y = -16, e.border_x = 0, e.border_y = 0, e.row = 6, e.col = 6, e.checkOffset = 20, e.moveCoe = .618, e.curveOffsetX = 300, e.moveSpeed = 1e3, e.swordDamage = 0, e.bossIsDead = !1, e.monsterAttackIndex = 0, e.touchId = 0, e.isPlayNormalBossPanelAction = !1, e.bigBossIsDead = !1, e.skillKillMonsterList = [], e.skillCheckTypeList = [], e
                }

                return __extends(e, t), (i = e).prototype.init = function () {
                    var t = this;
                    null == i.inst && (i.inst = this), this.list = [], this.checkList = [], this.recycle = [], this.curRoundMonster = [], this.normalBossInfoList = [], this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                        t.onTouchStart(e)
                    }), this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
                        t.onTouchMove(e)
                    }), this.node.on(cc.Node.EventType.TOUCH_END, function (e) {
                        t.onTouchEnd(e)
                    }), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
                        t.onTouchCancel(e)
                    }), this.Screen_w = cc.winSize.width, this.Screen_h = cc.winSize.height, this.border_x = (this.Screen_w - (this.pix_w + this.interval) * this.col) / 2 + this.offset_x, this.border_y = (this.Screen_h - (this.pix_h + this.interval) * this.row) / 2 + this.offset_y
                }, e.prototype.getCurNode = function (e) {
                    if (e.x > this.border_x && e.x < this.Screen_w - this.border_x + this.offset_x && e.y > this.border_y && e.y < this.Screen_h - this.border_y + 2 * this.offset_y) {
                        var t = (e.y - this.border_y) / (this.pix_h + this.interval),
                            n = (e.x - this.border_x) / (this.pix_w + this.interval);
                        t = Math.min(Math.floor(t), this.row - 1), t = Math.max(0, t), n = Math.min(Math.floor(n), this.col - 1), n = Math.max(0, n);
                        var o = this.border_x + (this.pix_w + this.interval) * n + this.pix_w / 2 - this.Screen_w / 2 + this.interval / 2,
                            a = this.border_y + (this.pix_h + this.interval) * t + this.pix_h / 2 - this.Screen_h / 2 + this.interval / 2,
                            l = (this.pix_w + this.interval) / 2 - this.checkOffset,
                            r = this.itemParent.convertToNodeSpaceAR(e);
                        r.x > o - l && r.x < o + l && r.y > a - l && r.y < a + l && (i.HoverObj = this.myNodeList[t][n])
                    }
                }, e.prototype.limit = function (e, t) {
                    for (var n = 0, o = 0, a = 0, l = 0, r = 0; r < this.row; r++) for (var i = 0; i < this.col; i++) {
                        var s = this.myNodeList[r][i].getComponent("ItemInfo");
                        e.getId() == s.getId() && (n = r, o = i), t.getId() == s.getId() && (a = r, l = i)
                    }
                    return Math.abs(n - a) <= 1 && Math.abs(o - l) <= 1
                }, e.prototype.check = function () {
                    if (null == i.HoverObj || null == this.tempObj) return !1;
                    var e = i.HoverObj.getComponent("ItemInfo"), t = this.tempObj.getComponent("ItemInfo");
                    if (!this.limit(e, t)) return !1;
                    if (e.getSpecialStatus().curStatus == D.ItemSpecialType.lock) return !1;
                    for (var n = 0; n < this.list.length; n++) {
                        var o = this.list[n].getComponent("ItemInfo");
                        if (e.getId() == o.getId()) {
                            if (0 <= n && n == this.list.length - 2) {
                                var a = this.list[n + 1].getComponent("ItemInfo");
                                if (a.getType() == D.ItemType.Monster) ; else {
                                    var l = a.getType();
                                    a.setIcon(this.image[l])
                                }
                                a.showShadow(!1), a.showKillIcon(!1);
                                var r = this.recycle[this.recycle.length - 1];
                                this.recycle.splice(this.recycle.length - 1, 1), H.default.inst.arrowPool.PutItem(r), this.list.splice(n + 1, 1), this.times--, this.refreshChooseType(), this.tempObj = i.HoverObj, this.state(this.temp)
                            }
                            return !1
                        }
                        if (this.curChooseType == k.EliminationType.Sword || this.curChooseType == k.EliminationType.Monster || this.curChooseType == k.EliminationType.SwordAndMonster) {
                            if (e.getType() != k.EliminationType.Sword && e.getType() != k.EliminationType.Monster) return !1;
                            e.getType() != this.curChooseType && (this.curChooseType = k.EliminationType.SwordAndMonster)
                        } else if (e.getType() != this.list[n].getComponent("ItemInfo").getType()) return !1
                    }
                    return this.curObj = e.node, !0
                }, e.prototype.refreshChooseType = function () {
                    if (0 < this.list.length && this.curChooseType == k.EliminationType.SwordAndMonster) {
                        this.curChooseType = this.list[0].getComponent("ItemInfo").getType();
                        for (var e = this.curChooseType, t = 0; t < this.list.length; t++) {
                            e = this.list[t].getComponent("ItemInfo").getType(), this.curChooseType != e ? this.curChooseType = k.EliminationType.SwordAndMonster : this.curChooseType = e
                        }
                    }
                }, e.prototype.state = function (e) {
                    for (var t = 0; t < this.list.length; t++) if (e) {
                        if ((v = this.list[t].getComponent("ItemInfo")).getType() == D.ItemType.Monster) ; else {
                            var n = v.getType();
                            v.setIcon(this.pickImage[n])
                        }
                        if (v.showShadow(!0), t == this.list.length - 1 && 0 < t && this.create) {
                            for (var o = this.list[t].position.sub(this.list[t - 1].position).mul(.5), a = this.list[t].position.sub(o), l = H.default.inst.arrowPool.CreateItem(this.lineHierarchy, a), r = 0, i = 0, s = 0, c = 0, p = 0; p < this.row; p++) for (var u = 0; u < this.col; u++) {
                                var d = this.myNodeList[p][u].getComponent("ItemInfo");
                                this.list[t].getComponent("ItemInfo").getId() == d.getId() && (r = p, s = u), this.list[t - 1].getComponent("ItemInfo").getId() == d.getId() && (i = p, c = u)
                            }
                            l.rotation = this.roate(s - c, i - r), l.rotation % 90 != 0 ? l.width = 195 * Math.SQRT2 : l.width = 209, l.name = "Image" + t, this.recycle.push(l), this.create = !1
                        }
                        2 < this.list.length && t == this.list.length - 1 ? (null == this.showValueNode ? (this.showValueNode = cc.instantiate(this.showValue), this.showValueHierarchy.addChild(this.showValueNode)) : this.showValueNode.active = !0, this.showValueNode.position = new cc.Vec2(this.list[t].position.x, this.list[t].position.y + 120), this.setShowValue()) : null != this.showValueNode && (this.showValueNode.active = !1)
                    } else {
                        var v;
                        if ((v = this.list[t].getComponent("ItemInfo")).getType() == D.ItemType.Monster) v.showKillIcon(!1); else {
                            n = v.getType();
                            v.setIcon(this.image[n])
                        }
                        null != this.showValueNode && this.showValueNode.active && (this.showValueNode.active = !1)
                    }
                }, e.prototype.setShowValue = function () {
                    var e = 0, t = 0;
                    if (x.PlayerData.curLevelType == T.LevelType.boss) for (var n = 0; n < this.list.length; n++) {
                        this.list[n].getComponent(P.default).getSpecialStatus().curStatus != D.ItemSpecialType.invalid && t++
                    } else t = this.list.length;
                    var o = H.default.inst.playerInfo.getAttackValue();
                    this.showValueNode.children[0].active = !0;
                    var a = Math.min(3, this.curChooseType);
                    switch (this.showValueNode.children[2].getComponent(cc.Sprite).spriteFrame = H.default.inst.icons.showValueType[a], this.curChooseType) {
                        case k.EliminationType.Gold:
                            e = c.Conect.get(t).coin;
                            break;
                        case k.EliminationType.Potion:
                            e = c.Conect.get(t).potion;
                            break;
                        case k.EliminationType.Shield:
                            e = c.Conect.get(t).shield;
                            break;
                        case k.EliminationType.Sword:
                            this.showValueNode.children[0].active = !1, e = c.Conect.get(t).sword + o * t, x.PlayerData.isCanDoubleDamage && (e *= 2);
                            break;
                        case k.EliminationType.Monster:
                            e = o, x.PlayerData.isCanDoubleDamage && (e *= 2);
                            break;
                        case k.EliminationType.SwordAndMonster:
                            var l = 0;
                            for (n = 0; n < t; n++) {
                                (r = this.list[n].getComponent("ItemInfo")).type == D.ItemType.Sword && l++
                            }
                            e = c.Conect.get(l).sword + o * l, x.PlayerData.isCanDoubleDamage && (e *= 2);
                            break;
                        default:
                            console.log("curChooseType = default")
                    }
                    if (this.showValueNode.getChildByName("value").getComponent(cc.Label).string = Math.round(e).toString(), this.curChooseType == k.EliminationType.Monster || this.curChooseType == k.EliminationType.SwordAndMonster) for (n = 0; n < this.list.length; n++) {
                        var r;
                        (r = this.list[n].getComponent("ItemInfo")).getType() == D.ItemType.Monster && e >= r.getMonsterHp() ? r.showKillIcon(!0) : r.showKillIcon(!1)
                    }
                }, e.prototype.roate = function (e, t) {
                    return 1 == e && 1 == t ? 45 : 0 == e && 1 == t ? 90 : -1 == e && 1 == t ? 135 : -1 == e && 0 == t ? 180 : -1 == e && -1 == t ? 225 : 0 == e && -1 == t ? 270 : 1 == e && -1 == t ? 315 : 0
                }, e.prototype.checkBossSkill = function (e, t, n) {
                    void 0 === n && (n = !1);
                    for (var o = e.getComponent("ItemInfo").getSkillList(), a = 0; a < o.length; a++) {
                        var l = o[a], r = s.default.inst.getSkill(l.skillId);
                        r.skillType == t && (r.skillType == O.BossSkillType.ActiveSkill ? 0 == l.curSkillCD ? (l.curSkillCD = l.skillCD, s.default.inst.useSkill(l.skillId, r, e, n)) : l.curSkillCD -= 1 : s.default.inst.useSkill(l.skillId, r, e, n))
                    }
                }, e.prototype.checkLockItem = function () {
                    for (var e = 0; e < this.col; e++) for (var t = 0; t < this.row; t++) {
                        var n = this.myNodeList[t][e].getComponent("ItemInfo");
                        if (n.getSpecialStatus().curStatus == D.ItemSpecialType.lock && (n.getSpecialStatus().statusCD -= 1, n.getSpecialStatus().statusCD <= 0)) {
                            var o = new P.SpecialStatus;
                            o.curStatus = 0, o.statusCD = -1, n.setSpecialStatus(o)
                        }
                    }
                }, e.prototype.monsterAttack = function () {
                    var e = this;
                    if (x.PlayerData.curLevelType == T.LevelType.boss) H.default.inst.levelBoss.getComponent(C.default).bossAttack(function () {
                        e.stop = !0, e.istouch = !0
                    }); else if (this.monsterAttackIndex < this.curRoundMonster.length) if (H.default.inst.uiPanelController.skillPrizePanel.getIsCompleted()) this.monsterAttackIndex = 0, this.stop = !0, this.istouch = !0; else {
                        var t = this.curRoundMonster[this.monsterAttackIndex].getComponent("ItemInfo");
                        0 < t.getMonsterId() && 0 < t.getMonsterHp() && (this.checkBossSkill(t.node, O.BossSkillType.BeforeATKPassiveSkill), g.default.inst.MonsterNormalAttack(t.node, function () {
                            e.checkBossSkill(t.node, O.BossSkillType.AfterATKPassiveSkill), e.checkBossSkill(t.node, O.BossSkillType.ActiveSkill), e.monsterAttackFinish()
                        }))
                    } else this.monsterAttackIndex = 0, this.stop = !0, this.istouch = !0
                }, e.prototype.monsterAttackFinish = function () {
                    this.monsterAttackIndex += 1, this.monsterAttack()
                }, e.prototype.clear = function (e) {
                    if (void 0 === e && (e = !1), e && (this.stop = !0, this.istouch = !0), null != this.list && 0 < this.list.length) {
                        (this.curChooseType == k.EliminationType.Monster || this.curChooseType == k.EliminationType.SwordAndMonster || x.PlayerData.curLevelType == T.LevelType.normal && this.curChooseType == k.EliminationType.Sword) && g.default.inst.GainSkillIncome(e);
                        for (var t = 0; t < this.list.length; t++) this.list[t].getComponent("ItemInfo").showShadow(!1);
                        this.list = [], this.tempObj = null, this.curObj = null, this.times = 0
                    }
                }, e.prototype.curRoundMonsterList = function () {
                    this.curRoundMonster = [];
                    for (var e = 0; e < this.col; e++) for (var t = 0; t < this.row; t++) {
                        var n = this.myNodeList[t][e].getComponent("ItemInfo");
                        0 < n.getMonsterId() && 0 < n.getMonsterHp() && this.curRoundMonster.push(n.node)
                    }
                }, e.prototype.getMoveToPosition = function (e) {
                    var t;
                    switch (e) {
                        case D.ItemType.Gold:
                            t = new cc.Vec2(-410, -550);
                            break;
                        case D.ItemType.Shield:
                            t = new cc.Vec2(50, -620);
                            break;
                        case D.ItemType.Potion:
                            t = new cc.Vec2(50, -700);
                            break;
                        case D.ItemType.Sword:
                            t = new cc.Vec2(0, 600)
                    }
                    return t
                }, e.prototype.getCurvePoint = function (e, t) {
                    var n = [], o = this.getMoveToPosition(t);
                    n.push(e);
                    var a = cc.Vec2.ZERO, l = 0;
                    l = e.x > o.x ? o.x + (e.x - o.x) * this.moveCoe + this.curveOffsetX : e.x + (o.x - e.x) * this.moveCoe - this.curveOffsetX;
                    var r = o.y + (e.y - o.y) * this.moveCoe;
                    return a.x = l, a.y = r, n.push(a), n.push(o), n
                }, e.prototype.getDuration = function (e, t) {
                    var n = this.getMoveToPosition(t);
                    return cc.pDistance(e, n) / this.moveSpeed
                }, e.prototype.attackLevelBossDamage = function (e, t, n) {
                    this.swordDamage = Math.round(e / t)
                }, e.prototype.levelBossIsDead = function (e) {
                    this.bossIsDead = e
                }, e.prototype.removeAgnailDeadMonster = function (e, t) {
                    var n = this, o = e.getComponent("ItemInfo"), a = (o.getType(), cc.callFunc(function (e) {
                        n.test(!1, t)
                    }, this));
                    if (o.getMonsterHp() <= 0) {
                        o.setStatus(1), o.showHpAndAtk(!1);
                        var l = cc.sequence(cc.fadeOut(.3), a);
                        o.node.getChildByName("icon").runAction(l);
                        var r = H.default.inst.monsterDeadPool.CreateItem(this.itemParent, o.node.position),
                            i = cc.callFunc(function () {
                                H.default.inst.monsterDeadPool.PutItem(r)
                            }), s = new cc.Vec2(o.node.position.x, o.node.position.y + 80),
                            c = cc.sequence(cc.spawn(cc.moveTo(1, s), cc.fadeOut(1)), i);
                        r.runAction(c)
                    }
                }, e.prototype.remove = function (t) {
                    var n = this;
                    void 0 === t && (t = !1);
                    for (var e = 0, o = this.recycle; e < o.length; e++) {
                        var a = o[e];
                        H.default.inst.arrowPool.PutItem(a)
                    }
                    this.recycle = [], this.curRoundMonster = [], this.curRoundMonsterList(), this.curChooseType == k.EliminationType.Monster || this.curChooseType == k.EliminationType.SwordAndMonster || this.curChooseType == k.EliminationType.Sword ? g.default.inst.Eliminate(this.curChooseType, this.list, t, function (e) {
                        n.afterRemove(t, e)
                    }) : this.afterRemove(t)
                }, e.prototype.afterRemove = function (h, m) {
                    var y = this;
                    void 0 === h && (h = !1), void 0 === m && (m = 0);
                    for (var I = 0, e = this.list.length == m, t = function (e) {
                        var l = f.list[e].getComponent("ItemInfo"), t = l.getType(), n = cc.callFunc(function (e) {
                            if (I++, (y.curChooseType == k.EliminationType.Gold || y.curChooseType == k.EliminationType.Shield || y.curChooseType == k.EliminationType.Potion || x.PlayerData.curLevelType == T.LevelType.boss && y.curChooseType == k.EliminationType.Sword) && (H.default.inst.audioManager.playGetItemAudio(y.curChooseType), e.scale = 1, H.default.inst.itemPool.PutItem(e), l.getSpecialStatus().curStatus == D.ItemSpecialType.burn)) {
                                (o = new P.SpecialStatus).curStatus = 0, o.statusCD = -1, l.setSpecialStatus(o);
                                var t = -Math.round(H.default.inst.levelBoss.getComponent(C.default).getBurnDamage());
                                H.default.inst.playerInfo.ChangeHp(t)
                            }
                            if (x.PlayerData.curLevelType == T.LevelType.boss && y.curChooseType == k.EliminationType.Sword && (l.getSpecialStatus().curStatus == D.ItemSpecialType.invalid ? g.default.inst.AttackLevelBoss(0) : g.default.inst.AttackLevelBoss(y.swordDamage)), I == y.list.length - m) {
                                y.curChooseType != k.EliminationType.Gold && y.curChooseType != k.EliminationType.Shield && y.curChooseType != k.EliminationType.Potion || g.default.inst.Eliminate(y.curChooseType, y.list, h);
                                for (var n = 0; n < y.list.length; n++) {
                                    var o, a = y.list[n].getComponent("ItemInfo");
                                    if (a.showShadow(!1), a.getSpecialStatus().curStatus == D.ItemSpecialType.invalid) (o = new P.SpecialStatus).curStatus = 0, o.statusCD = -1, a.setSpecialStatus(o)
                                }
                                x.PlayerData.curLevelType != T.LevelType.boss || y.curChooseType != k.EliminationType.Sword || y.bossIsDead || g.default.inst.levelBossGainSkillIncome(h), y.test(h)
                            }
                        }, f), o = void 0;
                        if (f.curChooseType == k.EliminationType.Gold || f.curChooseType == k.EliminationType.Shield || f.curChooseType == k.EliminationType.Potion) {
                            var a = f.getDuration(l.node.position, t), r = f.getCurvePoint(l.node.position, t);
                            o = cc.sequence(cc.spawn(cc.scaleTo(a, .5), cc.bezierTo(a, r)), n)
                        } else if (x.PlayerData.curLevelType == T.LevelType.boss && f.curChooseType == k.EliminationType.Sword) {
                            a = f.getDuration(l.node.position, t);
                            var i = f.getMoveToPosition(f.curChooseType);
                            o = cc.sequence(cc.spawn(cc.scaleTo(a, .5), cc.moveTo(a, i)), n)
                        } else o = cc.sequence(cc.scaleTo(.3, 0), n);
                        if (l.getMonsterHp() <= 0) {
                            if (l.setStatus(1), l.showHpAndAtk(!1), l.getSpecialStatus().curStatus == D.ItemSpecialType.burn && l.hideBurnStatus(), f.curChooseType == k.EliminationType.Gold || f.curChooseType == k.EliminationType.Shield || f.curChooseType == k.EliminationType.Potion || x.PlayerData.curLevelType == T.LevelType.boss && f.curChooseType == k.EliminationType.Sword) {
                                var s = H.default.inst.itemPool.CreateItem(f.moveEffect, l.node.position, f.pickImage[t]);
                                l.node.getChildByName("icon").scale = 0, s.runAction(o)
                            } else if (t != D.ItemType.Monster) l.node.getChildByName("icon").runAction(o); else {
                                var c = cc.sequence(cc.fadeOut(.3), n);
                                l.node.getChildByName("icon").runAction(c);
                                var p = H.default.inst.monsterDeadPool.CreateItem(f.itemParent, l.node.position),
                                    u = cc.callFunc(function () {
                                        H.default.inst.monsterDeadPool.PutItem(p)
                                    }), d = new cc.Vec2(l.node.position.x, l.node.position.y + 80),
                                    v = cc.sequence(cc.spawn(cc.moveTo(1, d), cc.fadeOut(1)), u);
                                p.runAction(v)
                            }
                            if (0 < l.getMonsterId()) {
                                var A = f.curRoundMonster.indexOf(l.node);
                                f.curRoundMonster.splice(A, 1)
                            }
                        }
                    }, f = this, n = 0; n < this.list.length; n++) t(n);
                    this.curChooseType == k.EliminationType.Monster && e && this.clear()
                }, e.prototype.test = function (e, t) {
                    var n = this;
                    void 0 === t && (t = null);
                    for (var o = 0, a = 0, l = !1, r = 0; r < this.col; r++) for (var i = 0; i < this.row; i++) if (1 == this.myNodeList[i][r].getComponent("ItemInfo").getStatus()) if (l = !0, i < this.row - 1) {
                        o++;
                        var s = this.myNodeList[i][r], c = this.myNodeList[i + 1][r], p = s.position, u = c.position;
                        this.myNodeList[i][r].position = u;
                        var d = cc.callFunc(function () {
                            ++a == o && l && n.test(e, t)
                        }), v = cc.sequence(cc.moveTo(.15, p), d);
                        this.myNodeList[i + 1][r].runAction(v), this.myNodeList[i][r] = c, this.myNodeList[i + 1][r] = s
                    } else {
                        var A = this.myNodeList[i][r], h = A.getComponent("ItemInfo"), m = (d = cc.callFunc(function () {
                            0 == o && (null == t ? n.clear(e) : t())
                        }), v = cc.sequence(cc.scaleTo(.2, 1), d), A.getChildByName("icon"));
                        h.getType() == D.ItemType.Monster && (m.opacity = 255, m.scale = 0), m.runAction(v), e || (this.sumStep += 1);
                        var y = this.checkEvent(this.sumStep);
                        if (null != y) switch (y.eventType) {
                            case R.EventType.Monster:
                                var I = this.randomEnemyGroup(y.eventId), f = M.LevelInfo.get(x.PlayerData.curLevel),
                                    P = N.Enemy.get(I), g = Math.round(f.hpParam * P.baseHp),
                                    k = Math.round(f.atkParam * P.baseAtk);
                                h.setIcon(H.default.inst.icons.monsterImage[N.Enemy.get(I).icon]), h.setStatus(0), h.setType(D.ItemType.Monster), h.initMonster(I, g, g, k, y.eventType);
                                break;
                            case R.EventType.Box:
                                w.default.instance.treasureBoxPrizePanel.InitPanel(y.eventId);
                                break;
                            case R.EventType.Boss:
                            case R.EventType.BigBoss:
                                var T = this.getNormalBossInfo(this.sumStep), C = M.LevelInfo.get(x.PlayerData.curLevel),
                                    S = N.Enemy.get(T.bossId), b = Math.round(C.hpParam * S.baseHp),
                                    U = Math.round(C.atkParam * S.baseAtk);
                                h.setBossStep(this.sumStep), h.setIcon(H.default.inst.icons.monsterImage[N.Enemy.get(T.bossId).icon]), h.setStatus(0), h.setType(D.ItemType.Monster), h.initMonster(T.bossId, b, b, U, y.eventType, T.skillList), this.checkBossSkill(A, O.BossSkillType.AuraSkill);
                                break;
                            default:
                                var L = this.randomType();
                                h.setIcon(this.image[L]), h.setStatus(0), h.setType(L), h.initMonster(0, 0, 0, 0, 0)
                        } else {
                            L = this.randomType();
                            h.setIcon(this.image[L]), h.setStatus(0), h.setType(L), h.initMonster(0, 0, 0, 0, 0)
                        }
                    }
                    l || (null == t ? this.clear(e) : t())
                }, e.prototype.getStop = function () {
                    return this.stop
                }, e.prototype.getTouch = function () {
                    return this.istouch
                }, e.prototype.getBigBossIsDead = function () {
                    return this.bigBossIsDead
                }, e.prototype.setBigBossIsDead = function (e) {
                    this.bigBossIsDead = e
                }, e.prototype.checkAliveMonster = function () {
                    for (var e = 0, t = 0; t < this.col; t++) for (var n = 0; n < this.row; n++) {
                        var o = this.myNodeList[n][t].getComponent("ItemInfo");
                        o.getType() == D.ItemType.Monster && 0 < o.getMonsterHp() && e++
                    }
                    return e
                }, e.prototype.getNormalBossInfo = function (e) {
                    for (var t = 0; t < this.normalBossInfoList.length; t++) {
                        var n = this.normalBossInfoList[t];
                        if (n.step == e) return n
                    }
                    return null
                }, e.prototype.randomBossSkill = function (e) {
                    for (var t = [], n = [], o = Array.from(v.EnemySkill.keys()), a = 0; a < o.length; a++) 9e3 != o[a] && n.push(o[a]);
                    var l = n.length, r = [];
                    for (a = 0; a < e; a++) for (var i = Math.random(), s = 0, c = 0, p = n; c < p.length; c++) {
                        var u = p[c];
                        if (r.indexOf(u) < 0) {
                            var d = s;
                            if (s += 1 / l, d < i && i < s) {
                                l -= 1, r.push(u), t.push(u);
                                break
                            }
                        }
                    }
                    return t
                }, e.prototype.randomEnemyGroup = function (e) {
                    for (var t = 0, n = 0, o = p.EnemyGroup; n < o.length; n++) {
                        (s = o[n]).groupId == e && (t += s.weight)
                    }
                    for (var a = Math.random(), l = 0, r = 0, i = p.EnemyGroup; r < i.length; r++) {
                        var s;
                        if ((s = i[r]).groupId == e) {
                            var c = l;
                            if (l += s.weight / t, c < a && a < l) return s.enemyId
                        }
                    }
                    return null
                }, e.prototype.checkEvent = function (e) {
                    for (var t = null, n = 0; n < a.Level.length; n++) {
                        var o = a.Level[n];
                        o.level == x.PlayerData.curLevel && e > this.eventStep && e == o.steps && (this.eventStep = o.steps, t = o)
                    }
                    return t
                }, e.prototype.getMonsterOrItemList = function (e) {
                    void 0 === e && (e = !0);
                    for (var t = [], n = 0; n < this.col; n++) for (var o = 0; o < this.row; o++) {
                        var a = this.myNodeList[o][n];
                        e ? a.getComponent("ItemInfo").getType() == D.ItemType.Monster && t.push(a) : a.getComponent("ItemInfo").getType() != D.ItemType.Monster && t.push(a)
                    }
                    return t
                }, e.prototype.levelBossChangeItem = function (e, t, n) {
                    for (var o = [], a = 0; a < this.row; a++) for (var l = 0; l < this.col; l++) {
                        0 == (u = this.myNodeList[a][l].getComponent("ItemInfo")).getSpecialStatus().curStatus && o.push(this.myNodeList[a][l])
                    }
                    var r = o.length, i = [];
                    for (a = 0; a < e; a++) for (var s = Math.random(), c = 0, p = 0; p < o.length; p++) {
                        var u = o[p];
                        if (i.indexOf(u) < 0) {
                            var d = c;
                            if (c += 1 / r, d < s && s < c) {
                                r -= 1;
                                var v = new P.SpecialStatus;
                                v.curStatus = t, v.statusCD = n, u.getComponent(P.default).setSpecialStatus(v), i.push(u);
                                break
                            }
                        }
                    }
                }, e.prototype.beckonMonster = function (e) {
                    var t = this.getMonsterOrItemList(!1);
                    if (null != t && 0 < t.length) {
                        var n = t[Math.floor(Math.random() * t.length)], o = this.randomEnemyGroup(e),
                            a = M.LevelInfo.get(x.PlayerData.curLevel), l = N.Enemy.get(o),
                            r = Math.round(a.hpParam * l.baseHp), i = Math.round(a.atkParam * l.baseAtk),
                            s = n.getComponent("ItemInfo");
                        s.setIcon(H.default.inst.icons.monsterImage[N.Enemy.get(o).icon]), s.setStatus(0), s.setType(D.ItemType.Monster), s.initMonster(o, r, r, i, R.EventType.Monster)
                    }
                }, e.prototype.bloodRecovery = function (e) {
                    var t = this.getMonsterOrItemList(!0);
                    if (null != t && 0 < t.length) {
                        t.sort(function (e, t) {
                            return e.getComponent("ItemInfo").getMonsterLossHp() > t.getComponent("ItemInfo").getMonsterLossHp() ? -1 : e.getComponent("ItemInfo").getMonsterLossHp() == t.getComponent("ItemInfo").getMonsterLossHp() ? 0 : 1
                        });
                        var n = t[0].getComponent("ItemInfo"), o = Math.ceil(e * n.getMonsterMaxHp());
                        t[0].getComponent("ItemInfo").setMonsterHp(o)
                    }
                }, e.prototype.displacement = function (e) {
                    var t = this.getMonsterOrItemList(!1), n = e;
                    if (null != t && 0 < t.length) {
                        var o = t[Math.floor(Math.random() * t.length)],
                            a = (n.position.x - this.border_x - this.interval / 2 + this.Screen_w / 2 - this.pix_w / 2) / (this.pix_w + this.interval),
                            l = (n.position.y - this.border_y - this.interval / 2 + this.Screen_h / 2 - this.pix_h / 2) / (this.pix_h + this.interval),
                            r = (o.position.x - this.border_x - this.interval / 2 + this.Screen_w / 2 - this.pix_w / 2) / (this.pix_w + this.interval),
                            i = (o.position.y - this.border_y - this.interval / 2 + this.Screen_h / 2 - this.pix_h / 2) / (this.pix_h + this.interval);
                        a = Math.round(a), l = Math.round(l), r = Math.round(r), i = Math.round(i);
                        var s = n.position;
                        n.position = o.position, this.myNodeList[i][r] = n, o.position = s, this.myNodeList[l][a] = o
                    }
                }, e.prototype.monsterAddDamage = function (e) {
                    var t = e.getMonsterId(), n = Math.round(e.getMonsterDamage() * (N.Enemy.get(t).atkUpPer / 100 + 1));
                    e.setMonsterDamage(n)
                }, e.prototype.checkItemType = function (e) {
                    this.skillCheckTypeList = [];
                    for (var t = 0; t < this.row; t++) for (var n = 0; n < this.col; n++) {
                        var o = this.myNodeList[t][n].getComponent(P.default);
                        o.getType() == e && this.skillCheckTypeList.push(o.node)
                    }
                    return 0 < this.skillCheckTypeList.length
                }, e.prototype.ItemTypeConvert = function (e, t) {
                    for (var n = 0; n < this.skillCheckTypeList.length; n++) {
                        var o = this.skillCheckTypeList[n].getComponent(P.default);
                        o.getType() == e && (o.setType(t), o.setIcon(this.image[t]))
                    }
                }, e.prototype.ItemTypeEliminate = function (e) {
                    this.stop = !1, this.curChooseType = e;
                    for (var t = 0; t < this.skillCheckTypeList.length; t++) {
                        var n = this.skillCheckTypeList[t].getComponent(P.default);
                        n.getType() == e && n.getSpecialStatus().curStatus != D.ItemSpecialType.lock && this.list.push(n.node)
                    }
                    this.remove(!0)
                }, e.prototype.checkKillMonster = function () {
                    this.skillKillMonsterList = [];
                    for (var e = 0; e < this.col; e++) for (var t = 0; t < this.row; t++) {
                        var n = this.myNodeList[t][e].getComponent(P.default);
                        n.getType() == D.ItemType.Monster && n.getEventType() == R.EventType.Monster && this.skillKillMonsterList.push(n.node)
                    }
                    return 0 < this.skillKillMonsterList.length
                }, e.prototype.killMonster = function () {
                    this.stop = !1;
                    for (var e = Math.random(), t = 0, n = 0, o = this.skillKillMonsterList; n < o.length; n++) {
                        var a = o[n], l = t;
                        t += 1 / this.skillKillMonsterList.length, l < e && e < t && this.list.push(a)
                    }
                    this.curChooseType = k.EliminationType.Monster, this.remove(!0)
                }, e.prototype.onTouchStart = function (e) {
                    if (this.istouch) {
                        var t = e;
                        this.istouch = !1, this.touchId = t.getID(), this.stop && (this.getCurNode(t.getLocation()), this.curObj = i.HoverObj, null != this.curObj && this.curObj.getComponent(P.default).getSpecialStatus().curStatus != D.ItemSpecialType.lock && (t.getLocation().x > this.border_x && t.getLocation().x < this.Screen_w - this.border_x + this.offset_x && t.getLocation().y > this.border_y && t.getLocation().y < this.Screen_h - this.border_y + 2 * this.offset_y && (this.temp = !0), this.curChooseType = this.curObj.getComponent("ItemInfo").getType(), this.times++, this.tempObj = this.curObj, this.list.push(this.curObj)))
                    }
                }, e.prototype.onTouchMove = function (e) {
                    var t = e;
                    this.touchId == t.getID() && this.stop && (this.getCurNode(t.getLocation()), i.HoverObj != this.tempObj && this.temp && this.check() && (H.default.inst.audioManager.playGem(), this.times++, this.tempObj = i.HoverObj, this.list.push(i.HoverObj), this.create = !0, this.state(this.temp)))
                }, e.prototype.onTouchEnd = function (e) {
                    var t = e;
                    if (this.touchId == t.getID() && this.stop) if (this.temp = !1, this.state(this.temp), this.times >= this.num) this.stop = !1, this.remove(); else {
                        for (var n = 0, o = this.recycle; n < o.length; n++) {
                            var a = o[n];
                            H.default.inst.arrowPool.PutItem(a)
                        }
                        for (var l = 0; l < this.list.length; l++) this.list[l].getComponent("ItemInfo").showShadow(!1);
                        this.times = 0, this.list = [], this.recycle = [], this.tempObj = null, this.curObj = null, this.istouch = !0
                    }
                }, e.prototype.onTouchCancel = function (e) {
                    var t = e;
                    if (this.touchId == t.getID() && this.stop) if (this.temp = !1, this.state(this.temp), this.times >= this.num) this.stop = !1, this.remove(); else {
                        for (var n = 0, o = this.recycle; n < o.length; n++) {
                            var a = o[n];
                            H.default.inst.arrowPool.PutItem(a)
                        }
                        for (var l = 0; l < this.list.length; l++) this.list[l].getComponent("ItemInfo").showShadow(!1);
                        this.times = 0, this.list = [], this.recycle = [], this.tempObj = null, this.curObj = null, this.istouch = !0
                    }
                }, e.prototype.randomType = function () {
                    for (var e = M.LevelInfo.get(x.PlayerData.curLevel), t = e.sheild + e.potion + e.coin + e.sword, n = [e.sheild, e.coin, e.potion, e.sword], o = 0, a = Math.random(), l = 0, r = 0; r < n.length; r++) {
                        var i = l;
                        l += n[r] / t, i < a && a < l && (o = r)
                    }
                    return o
                }, e.prototype.resettingParam = function () {
                    this.stop = !0, this.istouch = !0
                }, e.prototype.destroyNodeList = function () {
                    if (this.sumStep = 0, this.eventStep = 0, this.list = [], this.tempObj = null, this.curObj = null, i.HoverObj = null, this.bossIsDead = !1, this.bigBossIsDead = !1, this.resettingParam(), null != this.showValueNode && (this.showValueNode.destroy(), this.showValueNode = null), null != this.myNodeList) for (var e = 0; e < this.row; e++) for (var t = 0; t < this.col; t++) this.myNodeList[e][t].destroy()
                }, e.prototype.checkBossListActive = function (e) {
                    for (var t = 0; t < this.bossList.childrenCount; t++) {
                        if (this.bossList.children[t].active) if (e == parseInt(this.bossList.children[t].name)) {
                            this.bossList.children[t].active = !1;
                            break
                        }
                    }
                }, e.prototype.hideNormalBossPanel = function () {
                    var e = this;
                    if (!this.isPlayNormalBossPanelAction) {
                        this.isPlayNormalBossPanelAction = !0;
                        var t = cc.callFunc(function () {
                            e.normalBossPanel.active = !1, e.isPlayNormalBossPanelAction = !1
                        }), n = new cc.Vec2(0, 1920), o = cc.sequence(cc.moveTo(.6, n), t);
                        o.easing(cc.easeInOut(3)), this.normalPanelBg.runAction(o);
                        var a = cc.fadeTo(.6, 0);
                        this.normalPanelBlack.runAction(a)
                    }
                }, e.prototype.showNormalBossPanel = function () {
                    var e = this;
                    if (!this.isPlayNormalBossPanelAction) {
                        this.isPlayNormalBossPanelAction = !0, this.normalBossPanel.active = !0;
                        var t = cc.callFunc(function () {
                            e.isPlayNormalBossPanelAction = !1
                        }), n = cc.sequence(cc.moveTo(.6, cc.Vec2.ZERO), t);
                        n.easing(cc.easeInOut(3)), this.normalPanelBg.runAction(n);
                        var o = cc.fadeTo(.6, 128);
                        this.normalPanelBlack.runAction(o)
                    }
                }, e.prototype.randomNormalBoss = function () {
                    this.normalBossInfoList = [];
                    for (var e = 0; e < a.Level.length; e++) {
                        var t = a.Level[e];
                        if (t.level == x.PlayerData.curLevel && t.eventType > R.EventType.Box) {
                            var n = new o;
                            n.step = t.steps, n.bossId = this.randomEnemyGroup(t.eventId), n.skillList = this.randomBossSkill(t.eventParam), this.normalBossInfoList.push(n)
                        }
                    }
                }, e.prototype.refreshBossList = function () {
                    for (var e = 0; e < this.bossList.childrenCount; e++) e < this.normalBossInfoList.length ? (this.bossList.children[e].active = !0, this.bossList.children[e].name = this.normalBossInfoList[e].step.toString(), this.bossList.children[e].getComponent(cc.Sprite).spriteFrame = H.default.inst.icons.monsterImage[N.Enemy.get(this.normalBossInfoList[e].bossId).icon]) : this.bossList.children[e].active = !1
                }, e.prototype.refreshNormalBossPanel = function () {
                    this.normalPanelBg.height = 220 * (this.normalBossInfoList.length + 1);
                    for (var e = 0; e < this.normalBossInfo.childrenCount; e++) if (e < this.normalBossInfoList.length) {
                        this.normalBossInfo.children[e].active = !0, this.normalBossInfo.children[e].children[0].getComponent(cc.Sprite).spriteFrame = H.default.inst.icons.monsterImage[N.Enemy.get(this.normalBossInfoList[e].bossId).icon];
                        for (var t = "", n = 0; n < this.normalBossInfoList[e].skillList.length; n++) {
                            var o = this.normalBossInfoList[e].skillList[n];
                            n == this.normalBossInfoList[e].skillList.length - 1 ? t += v.EnemySkill.get(o).des : t += v.EnemySkill.get(o).des + ", "
                        }
                        this.normalBossInfo.children[e].children[1].getComponent(cc.Label).string = t
                    } else this.normalBossInfo.children[e].active = !1
                }, e.prototype.showHelpPanel = function () {
                    this.helpPanel.init()
                }, e.prototype.CreateImage = function () {
                    var e = this;
                    x.PlayerData.curLevelType == T.LevelType.normal ? (this.bossList.active = !0, this.randomNormalBoss(), this.refreshBossList(), this.refreshNormalBossPanel(), x.PlayerData.isFirst ? (x.PlayerData.isFirst = !1, u.default.inst.saveIsFirst(x.PlayerData.isFirst), this.helpPanel.init(function () {
                        e.showNormalBossPanel()
                    })) : this.showNormalBossPanel()) : this.bossList.active = !1;
                    var t = this, n = 0;
                    this.destroyNodeList(), t.myNodeList = [];
                    for (var o = 0; o < t.row; o++) {
                        t.myNodeList[o] = [];
                        for (var a = 0; a < t.col; a++) {
                            var l;
                            l = new cc.Vec2(t.border_x + (t.pix_w + t.interval) * a + t.pix_w / 2 - t.Screen_w / 2 + t.interval / 2, t.border_y + (t.pix_h + t.interval) * o + t.pix_h / 2 - t.Screen_h / 2 + t.interval / 2);
                            var r = cc.instantiate(t.item);
                            t.node.addChild(r), r.setPosition(l), t.myNodeList[o][a] = r, t.myNodeList[o][a].name = "Pic_" + n;
                            var i = this.randomType(), s = r.addComponent("ItemInfo");
                            s.setIcon(this.image[i]), s.showHpAndAtk(!1), s.initItem(n, i, 0, 0, 0, 0, 0, 0), n++
                        }
                    }
                }, __decorate([A([cc.SpriteFrame])], e.prototype, "image", void 0), __decorate([A([cc.SpriteFrame])], e.prototype, "pickImage", void 0), __decorate([A(cc.Prefab)], e.prototype, "item", void 0), __decorate([A(cc.Node)], e.prototype, "itemParent", void 0), __decorate([A(cc.Prefab)], e.prototype, "showValue", void 0), __decorate([A(cc.Node)], e.prototype, "moveEffect", void 0), __decorate([A(cc.Node)], e.prototype, "lineHierarchy", void 0), __decorate([A(cc.Node)], e.prototype, "showValueHierarchy", void 0), __decorate([A(cc.Node)], e.prototype, "bossList", void 0), __decorate([A(cc.Node)], e.prototype, "normalBossPanel", void 0), __decorate([A(cc.Node)], e.prototype, "normalBossInfo", void 0), __decorate([A(cc.Node)], e.prototype, "normalPanelBg", void 0), __decorate([A(cc.Node)], e.prototype, "normalPanelBlack", void 0), __decorate([A(l.default)], e.prototype, "helpPanel", void 0), e = i = __decorate([d], e);
                var i
            }(cc.Component);
        n.ItemManager = i, cc._RF.pop()
    }, {
        "../Data/Conect": "Conect",
        "../Data/Enemy": "Enemy",
        "../Data/EnemyGroup": "EnemyGroup",
        "../Data/EnemySkill": "EnemySkill",
        "../Data/Level": "Level",
        "../Data/LevelInfo": "LevelInfo",
        "../Eume/BossSkillType": "BossSkillType",
        "../Eume/EliminationType": "EliminationType",
        "../Eume/EventType": "EventType",
        "../Eume/ItemType": "ItemType",
        "../Eume/LevelType ": "LevelType ",
        "../Model/ItemInfo": "ItemInfo",
        "../Model/LevelBossInfo": "LevelBossInfo",
        "../Platform/PersistentManager": "PersistentManager",
        "../UI/HelpPanel": "HelpPanel",
        "../UI/UIPanelController": "UIPanelController",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./BossSkillManager": "BossSkillManager",
        "./CalculationManager": "CalculationManager",
        "./GameManager": "GameManager"
    }],
    ItemPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "f7339VQlNhJ/48O0IDEEnex", "ItemPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                null == this.itemPoolList && (this.itemPoolList = new cc.NodePool);
                for (var e = 0; e < 5; ++e) {
                    var t = cc.instantiate(this.itemPrefab);
                    this.itemPoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t, n) {
                var o = null;
                return (o = 0 < this.itemPoolList.size() ? this.itemPoolList.get() : cc.instantiate(this.itemPrefab)).parent = e, o.position = t, o.children[0].getComponent(cc.Sprite).spriteFrame = n, o
            }, e.prototype.PutItem = function (e) {
                this.itemPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.itemPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "itemPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    ItemType: [function (e, t, n) {
        "use strict";
        var o, a;
        cc._RF.push(t, "3022abpeYxM24UUjMwveEZv", "ItemType"), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.ItemType || (n.ItemType = {}))[o.Shield = 0] = "Shield", o[o.Gold = 1] = "Gold", o[o.Potion = 2] = "Potion", o[o.Sword = 3] = "Sword", o[o.Monster = 4] = "Monster", (a = n.ItemSpecialType || (n.ItemSpecialType = {}))[a.normal = 0] = "normal", a[a.invalid = 1] = "invalid", a[a.lock = 2] = "lock", a[a.burn = 3] = "burn", cc._RF.pop()
    }, {}],
    Item: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "39d1ftvyg1AXaXEUoa/0wzs", "Item"), Object.defineProperty(n, "__esModule", {value: !0}), n.Item = new Map, n.Item.set(10001, {
            name: "potion",
            des: "恢复HP",
            param: .6,
            res: 0
        }), n.Item.set(10002, {
            name: "shield",
            des: "增益装甲",
            param: .4,
            res: 1
        }), n.Item.set(10003, {
            name: "critical hit",
            des: "下次攻击造成双倍伤害",
            param: 2,
            res: 2
        }), n.Item.set(10004, {
            name: "snipe",
            des: "随机杀死一个非BOSS的能量",
            param: 1,
            res: 3
        }), n.Item.set(10005, {
            name: "sword to gold",
            des: "转换所有的剑到金牌",
            param: 0,
            res: 4
        }), n.Item.set(10006, {
            name: "sword to potion",
            des: "把所有的剑变成魔药",
            param: 0,
            res: 5
        }), n.Item.set(10007, {
            name: "shield to sword",
            des: "把所有的盾牌变成剑",
            param: 0,
            res: 6
        }), n.Item.set(10008, {
            name: "shield to gold",
            des: "把所有的盾牌变成金子",
            param: 0,
            res: 7
        }), n.Item.set(10009, {
            name: "gold to sword",
            des: "把所有的金子变成剑",
            param: 0,
            res: 8
        }), n.Item.set(10010, {
            name: "collect potion",
            des: "收集所有药剂",
            param: 0,
            res: 9
        }), n.Item.set(10011, {
            name: "collect shield",
            des: "收集所有护盾",
            param: 0,
            res: 10
        }), n.Item.set(10012, {name: "collect gold", des: "收集所有的黄金", param: 0, res: 11}), cc._RF.pop()
    }, {}],
    Lanuch: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "067d1usdENPvLi6hVCDGK0Q", "Lanuch"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.button = null, e.sprite = null, e.score = 0, e
            }

            return __extends(e, t), e.prototype.start = function () {
                this.isShow = !1, this.tex = new cc.Texture2D, this.button.node.on("click", this.onClick, this)
            }, e.prototype.SetData = function () {
                var e = new Array;
                e.push({key: "score", value: 100}), wx.setUserCloudStorage({
                    KVDataList: e, success: function (e) {
                        this.isShow = !this.isShow, wx.postMessage({message: "rank"}), console.log("game.js->index.js setUserCloudStorage success", e)
                    }, fail: function (e) {
                        console.log("game.js->index.js setUserCloudStorage fail", e)
                    }
                })
            }, e.prototype.GetData = function () {
            }, e.prototype.onClick = function () {
                this.SetData()
            }, e.prototype.updaetSubDomainCanvas = function () {
                this.tex && (this.tex.initWithElement(sharedCanvas), this.tex.handleLoadedTexture(), this.sprite.spriteFrame = new cc.SpriteFrame(this.tex))
            }, e.prototype.update = function () {
                this.updaetSubDomainCanvas()
            }, __decorate([l(cc.Button)], e.prototype, "button", void 0), __decorate([l(cc.Sprite)], e.prototype, "sprite", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    LevelBossInfo: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "a8f3fxloB5M6pQTSo2a/hxy", "LevelBossInfo"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../charactor/PlayerInfo"), c = e("../Data/Boss"), p = e("../Data/BossSkill"),
            s = e("../Manager/GameManager"), a = e("../Manager/CalculationManager"), l = e("../Manager/ItemManager"),
            r = e("../Eume/BossSkillType"), i = e("../Eume/ItemType"), u = function () {
                this.skillId = 0, this.skillCD = 0, this.curSkillCD = 0
            };
        n.LevelBossSkill = u;
        var d = cc._decorator, v = d.ccclass, A = d.property, h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.bossNode = null, e.hpBar = null, e.skillList = [], e.progressWidth = 1080, e.attackCallback = null, e.bossIsDead = !1, e.useActiveSkill = !1, e.activeCheckNum = 0, e
            }

            return __extends(e, t), e.prototype.init = function (e) {
                var t = this;
                this.bossIsDead = !1, this.useActiveSkill = !1, this.id = e, this.skillList = [];
                var n = c.Boss.get(e);
                this.maxHp = n.bossHp, this.hp = n.bossHp, this.damage = n.bossAtk;
                for (var o = Array.from(p.BossSkill.keys()), a = Array.from(p.BossSkill.values()), l = 0; l < a.length; l++) {
                    if ((s = a[l]).bossId == this.id) {
                        var r = new u;
                        r.skillId = o[l], r.skillCD = s.skillCd, r.curSkillCD = s.skillCd, this.skillList.push(r)
                    }
                }
                var i = e.toString();
                this.bossNode.active = !0;
                for (l = 0; l < this.bossNode.childrenCount; l++) {
                    var s;
                    (s = this.bossNode.children[l]).active = s.name == i, s.active && (this.curBoss = s)
                }
                this.armature = this.bossNode.getChildByName(i).children[0].getComponent(dragonBones.ArmatureDisplay), this.animComplete = function (e) {
                    return t.OnAnimComplete(e)
                }, this.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.animComplete)
            }, e.prototype.OnAnimComplete = function (e) {
                var t = this;
                if ("gongji01" == this.armature.animationName) if (this.useActiveSkill) {
                    var n = this.skillList[this.activeCheckNum], o = p.BossSkill.get(n.skillId);
                    this.useSkill(r.BossSkillType.ActiveSkill, n.skillId, o), this.armature.playAnimation("gongji02", 1)
                } else this.playAttackAnimation(function () {
                    t.checkSkill(r.BossSkillType.BeforeATKPassiveSkill), a.default.inst.MonsterAttackDamage(t.damage, function () {
                        t.checkActiveSkill()
                    }), t.checkSkill(r.BossSkillType.AfterATKPassiveSkill)
                }), this.armature.playAnimation("gongji02", 1); else "gongji02" == this.armature.animationName && (this.useActiveSkill ? (this.activeCheckNum++, this.checkActiveSkill()) : this.armature.playAnimation("daiji", -1))
            }, e.prototype.getPosition = function (e) {
                var t;
                switch (e) {
                    case 3001:
                        t = new cc.Vec2(-300, 920);
                        break;
                    case 3002:
                        t = new cc.Vec2(0, -0);
                        break;
                    case 3003:
                        t = new cc.Vec2(0, 720)
                }
                return t
            }, e.prototype.playAttackAnimation = function (t) {
                void 0 === t && (t = null);
                var e, n = this.getPosition(this.id), o = this.id - 3001, a = s.default.inst.icons.levelBossThrow[o],
                    l = s.default.inst.monsterAttackPool.CreateItem(this.bossNode, n, a), r = cc.callFunc(function (e) {
                        if (s.default.inst.audioManager.playWeaponHit(), s.default.inst.monsterAttackPool.PutItem(e), null != t) {
                            if (s.default.inst.gameOverPanel.getGameOver()) return void s.default.inst.gameOverPanel.setGameOver(!1);
                            t()
                        }
                    }, this), i = new cc.Vec2(50, -660);
                3001 == this.id || 3003 == this.id ? e = cc.sequence(cc.moveTo(.5, i), r) : 3002 == this.id && (e = cc.sequence(cc.spawn(cc.moveTo(.5, i), cc.rotateBy(.5, 1080)), r)), l.runAction(e), s.default.inst.audioManager.playWeaponFly()
            }, e.prototype.playBossHpAnimation = function (e, t) {
                void 0 === t && (t = null);
                var n = this.curBoss.children[0], o = s.default.inst.numPool.CreateItem(n, cc.Vec2.ZERO, -e),
                    a = cc.callFunc(function () {
                        s.default.inst.numPool.PutItem(o), null != t && t()
                    }), l = new cc.Vec2(0, 60), r = cc.sequence(cc.spawn(cc.moveTo(.3, l), cc.fadeOut(.6)), a);
                o.runAction(r), this.hpBar.children[0].width = this.hp / this.maxHp * this.progressWidth
            }, e.prototype.AgnailArmorDamage = function (e, t) {
                this.hp -= e, this.playBossHpAnimation(e), this.hp <= 0 && !this.bossIsDead && (this.bossIsDead = !0, l.ItemManager.inst.levelBossIsDead(!0), 3003 == this.id ? (this.bossNode.active = !1, s.default.inst.showGameOverPanel(!0, !0)) : s.default.inst.uiPanelController.skillPrizePanel.InitPanel()), this.bossIsDead || t()
            }, e.prototype.attackBoss = function (e) {
                this.hp -= e, this.checkSkill(r.BossSkillType.AttackedPassiveSkill), this.playBossHpAnimation(e), this.hp <= 0 && !this.bossIsDead && (this.bossIsDead = !0, l.ItemManager.inst.levelBossIsDead(!0), 3003 == this.id ? (this.bossNode.active = !1, s.default.inst.showGameOverPanel(!0, !0)) : s.default.inst.uiPanelController.skillPrizePanel.InitPanel())
            }, e.prototype.bossAttack = function (e) {
                this.attackCallback = e, this.armature.playAnimation("gongji01", 1)
            }, e.prototype.deleteEvent = function () {
                this.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.animComplete)
            }, e.prototype.checkActiveSkill = function () {
                if (this.activeCheckNum < this.skillList.length) {
                    var e = this.skillList[this.activeCheckNum];
                    p.BossSkill.get(e.skillId).skillType == r.BossSkillType.ActiveSkill ? 0 == e.curSkillCD ? (e.curSkillCD = e.skillCD, this.useActiveSkill = !0, this.armature.playAnimation("gongji01", 1)) : (e.curSkillCD -= 1, this.activeCheckNum++, this.checkActiveSkill()) : (this.activeCheckNum++, this.checkActiveSkill())
                } else this.activeCheckNum = 0, this.useActiveSkill = !1, this.armature.playAnimation("daiji", -1), null != this.attackCallback && this.attackCallback(), l.ItemManager.inst.checkLockItem()
            }, e.prototype.checkSkill = function (e, t) {
                void 0 === t && (t = 0);
                for (var n = null, o = 0; o < this.skillList.length; o++) {
                    var a = this.skillList[o];
                    (n = p.BossSkill.get(a.skillId)).skillType == e && this.useSkill(e, a.skillId, n, t)
                }
            }, e.prototype.useSkill = function (e, t, n, o) {
                switch (void 0 === o && (o = 0), e) {
                    case r.BossSkillType.ActiveSkill:
                        1002 == t ? this.invalidItem(n) : 1003 == t || 1006 == t || 1010 == t ? this.addDamage(n) : 1007 == t || 1011 == t ? this.bloodRecovery(n) : 1005 == t ? this.lockItem(n) : 1009 == t && this.burnItem(n);
                        break;
                    case r.BossSkillType.AuraSkill:
                        break;
                    case r.BossSkillType.AttackedPassiveSkill:
                        1008 == t && this.reboundInjury(n, o);
                        break;
                    case r.BossSkillType.BeforeATKPassiveSkill:
                        1004 == t && this.punctureInjury(n);
                        break;
                    case r.BossSkillType.AfterATKPassiveSkill:
                        1001 == t && this.suckBlood(n)
                }
            }, e.prototype.suckBlood = function (e) {
                var t = Math.round(this.damage * e.skillParam);
                this.hp += t, this.hpBar.children[0].width = this.hp / this.maxHp * this.progressWidth
            }, e.prototype.invalidItem = function (e) {
                l.ItemManager.inst.levelBossChangeItem(e.skillParam, i.ItemSpecialType.invalid, -1)
            }, e.prototype.addDamage = function (e) {
                this.damage = Math.round(this.damage * (1 + e.skillParam))
            }, e.prototype.punctureInjury = function (e) {
                var t = 0;
                0 < o.PlayerData.curArmor && (t = 0 - Math.round(this.damage * e.skillParam), s.default.inst.playerInfo.ChangeHp(t))
            }, e.prototype.lockItem = function (e) {
                l.ItemManager.inst.levelBossChangeItem(e.skillParam, i.ItemSpecialType.lock, 3)
            }, e.prototype.bloodRecovery = function (e) {
                this.hp += e.skillParam, this.hp > this.maxHp && (this.hp = this.maxHp), this.hpBar.children[0].width = this.hp / this.maxHp * this.progressWidth
            }, e.prototype.reboundInjury = function (e, t) {
                var n = Math.round(e.skillParam * t);
                n < 1 && (n = 1), s.default.inst.playerInfo.ChangeHp(-n)
            }, e.prototype.burnItem = function (e) {
                l.ItemManager.inst.levelBossChangeItem(e.skillParam, i.ItemSpecialType.burn, -1)
            }, e.prototype.getBurnDamage = function () {
                return .2 * c.Boss.get(3003).bossAtk
            }, e.prototype.start = function () {
            }, __decorate([A(cc.Node)], e.prototype, "bossNode", void 0), __decorate([A(cc.Node)], e.prototype, "hpBar", void 0), e = __decorate([v], e)
        }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../Data/Boss": "Boss",
        "../Data/BossSkill": "BossSkill",
        "../Eume/BossSkillType": "BossSkillType",
        "../Eume/ItemType": "ItemType",
        "../Manager/CalculationManager": "CalculationManager",
        "../Manager/GameManager": "GameManager",
        "../Manager/ItemManager": "ItemManager",
        "../charactor/PlayerInfo": "PlayerInfo"
    }],
    LevelEventPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "841d1g5FaZImYZ5NnFxp+OL", "LevelEventPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var r = e("../Data/LevelEvent"), o = e("../Eume/PlayerPropertyType"), a = e("../Manager/GameManager"),
            l = e("../charactor/PlayerInfo"), i = e("../Data/LevelInfo"), s = cc._decorator, c = s.ccclass,
            p = s.property, u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.event1 = null, e.event2 = null, e.button = null, e.button1 = null, e.button2 = null, e.des = null, e.levelbg = null, e.event = null, e.choose = 0, e
                }

                return __extends(e, t), e.prototype.init = function () {
                    this.handleLevelEvent()
                }, e.prototype.onEnable = function () {
                    this.node.on("click", this.clickCallback, this), this.button.on("click", this.okBtn, this), this.button1.on("click", this.btnOne, this), this.button2.on("click", this.btnTwo, this)
                }, e.prototype.onDisable = function () {
                    this.event = null, this.node.off("click", this.clickCallback, this), this.button.off("click", this.okBtn, this), this.button1.off("click", this.btnOne, this), this.button2.off("click", this.btnTwo, this)
                }, e.prototype.handleLevelEvent = function () {
                    if (this.event = this.randomEvent(), null != this.event) {
                        var e = i.LevelInfo.get(l.PlayerData.curLevel).bg;
                        this.levelbg.spriteFrame = a.default.inst.icons.levelBg[e];
                        var t = 0;
                        1 == this.event.eventType ? (this.event1.active = !0, this.event2.active = !1, t = Math.abs(this.getpropValue(this.event.Reward1, this.event.Reward01))) : 2 == this.event.eventType && (this.event1.active = !1, this.event2.active = !0, this.button1.children[0].getComponent(cc.Label).string = this.event.Answer1, this.button2.children[0].getComponent(cc.Label).string = this.event.Answer2);
                        var n = this.event.eventDes.format(t);
                        this.des.string = n
                    }
                }, e.prototype.getpropValue = function (e, t) {
                    var n = 0;
                    switch (e) {
                        case o.PlayerPropertyType.ATK:
                        case o.PlayerPropertyType.DEF:
                        case o.PlayerPropertyType.HP:
                        case o.PlayerPropertyType.GOLD:
                            n = t;
                            break;
                        case o.PlayerPropertyType.perATK:
                            n = t / 100 * a.default.inst.playerInfo.getAttackValue();
                            break;
                        case o.PlayerPropertyType.perDEF:
                            n = t / 100 * a.default.inst.playerInfo.getArmor(), n = 0 < t ? Math.max(10, n) : Math.min(-10, n);
                            break;
                        case o.PlayerPropertyType.perHP:
                            n = t / 100 * l.PlayerData.curHp, n = 0 < t ? Math.max(50, n) : Math.min(-50, n);
                            break;
                        case o.PlayerPropertyType.perGOLD:
                            n = t / 100 * l.PlayerData.money, 0 < t && (n = Math.max(100, n))
                    }
                    return Math.round(n)
                }, e.prototype.changePlayerProp = function (e, t) {
                    switch (e) {
                        case o.PlayerPropertyType.ATK:
                            a.default.inst.playerInfo.ChangeExtraAtk(t);
                            break;
                        case o.PlayerPropertyType.DEF:
                            a.default.inst.playerInfo.ChangeArmor(t);
                            break;
                        case o.PlayerPropertyType.HP:
                            a.default.inst.playerInfo.ChangeHp(t);
                            break;
                        case o.PlayerPropertyType.GOLD:
                            a.default.inst.playerInfo.ChangeMoney(t);
                            break;
                        case o.PlayerPropertyType.perATK:
                            a.default.inst.playerInfo.ChangeExtraAtk(t);
                            break;
                        case o.PlayerPropertyType.perDEF:
                            a.default.inst.playerInfo.ChangeArmor(t);
                            break;
                        case o.PlayerPropertyType.perHP:
                            a.default.inst.playerInfo.ChangeHp(t);
                            break;
                        case o.PlayerPropertyType.perGOLD:
                            a.default.inst.playerInfo.ChangeMoney(t)
                    }
                }, e.prototype.randomEvent = function () {
                    var o = null, a = Math.random(), l = 0;
                    return r.LevelEvent.forEach(function (e, t) {
                        var n = l;
                        l += 1 / r.LevelEvent.size, n < a && a < l && (o = e)
                    }), o
                }, e.prototype.okBtn = function () {
                    if (1 == this.event.eventType) {
                        var e = this.getpropValue(this.event.Reward1, this.event.Reward01);
                        this.changePlayerProp(this.event.Reward1, e)
                    } else if (1 == this.choose) {
                        e = this.getpropValue(this.event.Reward1, this.event.Reward01);
                        this.changePlayerProp(this.event.Reward1, e)
                    } else {
                        e = this.getpropValue(this.event.Reward2, this.event.Reward02);
                        this.changePlayerProp(this.event.Reward2, e)
                    }
                    this.node.active = !1, a.default.inst.showLevelPanel(!0, !0)
                }, e.prototype.btnOne = function () {
                    this.choose = 1, this.event1.active = !0, this.event2.active = !1;
                    var e = Math.abs(this.getpropValue(this.event.Reward1, this.event.Reward01)),
                        t = this.event.AnswerDes1.format(e);
                    this.des.string = t
                }, e.prototype.btnTwo = function () {
                    this.choose = 2, this.event1.active = !0, this.event2.active = !1;
                    var e = Math.abs(this.getpropValue(this.event.Reward2, this.event.Reward02)),
                        t = this.event.AnswerDes2.format(e);
                    this.des.string = t
                }, e.prototype.clickCallback = function () {
                }, __decorate([p(cc.Node)], e.prototype, "event1", void 0), __decorate([p(cc.Node)], e.prototype, "event2", void 0), __decorate([p(cc.Node)], e.prototype, "button", void 0), __decorate([p(cc.Node)], e.prototype, "button1", void 0), __decorate([p(cc.Node)], e.prototype, "button2", void 0), __decorate([p(cc.Label)], e.prototype, "des", void 0), __decorate([p(cc.Sprite)], e.prototype, "levelbg", void 0), e = __decorate([c], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../Data/LevelEvent": "LevelEvent",
        "../Data/LevelInfo": "LevelInfo",
        "../Eume/PlayerPropertyType": "PlayerPropertyType",
        "../Manager/GameManager": "GameManager",
        "../charactor/PlayerInfo": "PlayerInfo"
    }],
    LevelEvent: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "444a6L2pIJNhrWaIdXD8Ebo", "LevelEvent"), Object.defineProperty(n, "__esModule", {value: !0}), n.LevelEvent = new Map, n.LevelEvent.set(1, {
            eventType: 1,
            eventDes: "You stepped on a dead slime. It's too disgusting that you have to throw away your boots. Your armor is reduced by {0}.   ",
            Answer1: "0",
            AnswerDes1: "0",
            Reward1: 12,
            Reward01: -30,
            Answer2: "0",
            AnswerDes2: "0",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(2, {
            eventType: 1,
            eventDes: "A goblin showed up in the corner unexpectedly. He stole your wallet and ran away. You lost {0} golds.",
            Answer1: "0",
            AnswerDes1: "0",
            Reward1: 14,
            Reward01: -30,
            Answer2: "0",
            AnswerDes2: "0",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(3, {
            eventType: 1,
            eventDes: "You discovered remains of an adventurer and found {0} golds in his wallet.",
            Answer1: "0",
            AnswerDes1: "0",
            Reward1: 14,
            Reward01: 20,
            Answer2: "0",
            AnswerDes2: "0",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(4, {
            eventType: 1,
            eventDes: "You discovered a chest and found a brand new armor in it. Your armor is increased by {0}.",
            Answer1: "0",
            AnswerDes1: "0",
            Reward1: 12,
            Reward01: 30,
            Answer2: "0",
            AnswerDes2: "0",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(5, {
            eventType: 1,
            eventDes: "You opened a stone coffin and found a sword. Your attack power is increased by {0}.",
            Answer1: "0",
            AnswerDes1: "0",
            Reward1: 1,
            Reward01: 3,
            Answer2: "0",
            AnswerDes2: "0",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(6, {
            eventType: 1,
            eventDes: "You broke a small pot and were bitten by a scorpion in it.  You lost {0} hp.",
            Answer1: "0",
            AnswerDes1: "0",
            Reward1: 13,
            Reward01: -30,
            Answer2: "0",
            AnswerDes2: "0",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(7, {
            eventType: 2,
            eventDes: "You meet the river god near a pond. He holds a golden axe and a silver one and asks which one is yours.",
            Answer1: "The golden axe.",
            AnswerDes1: "The river god hit you with the golden axe hardly. You lost {0} hp.",
            Reward1: 13,
            Reward01: -30,
            Answer2: "The silver axe.",
            AnswerDes2: "The river god hit you with the silver axe hardly. You lost {0} hp.",
            Reward2: 13,
            Reward02: -50
        }), n.LevelEvent.set(8, {
            eventType: 2,
            eventDes: "You meet the river god near a pond. He holds a golden axe and a silver one and asks which one is yours.",
            Answer1: "The golden axe.",
            AnswerDes1: "The river god gave you the golden axe as a present. You golds is increased by {0}.",
            Reward1: 14,
            Reward01: 30,
            Answer2: "The silver axe.",
            AnswerDes2: "The river god gave you the silver axe as a present. You golds is increased by {0}.",
            Reward2: 14,
            Reward02: 20
        }), n.LevelEvent.set(9, {
            eventType: 2,
            eventDes: "You discovered an ancient altar. There is a sword with a skull on it.",
            Answer1: "Take it.",
            AnswerDes1: "You got a nice sword. Your attack power is increased by {0}.",
            Reward1: 1,
            Reward01: 3,
            Answer2: "Leave it.",
            AnswerDes2: "Nothing happened.",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(10, {
            eventType: 2,
            eventDes: "You discovered an ancient altar. There is a sword with a skull on it.",
            Answer1: "Take it.",
            AnswerDes1: "It's a cursed sword. You lost {0} hp.",
            Reward1: 13,
            Reward01: -50,
            Answer2: "Leave it.",
            AnswerDes2: "Your carefulness saved your life. Your hp is restored by {0}.",
            Reward2: 13,
            Reward02: 50
        }), n.LevelEvent.set(11, {
            eventType: 2,
            eventDes: "You discovered an ancient altar. There is a sword with a skull on it.",
            Answer1: "Take it.",
            AnswerDes1: "The sword disappears. Nothing happened.",
            Reward1: 0,
            Reward01: 0,
            Answer2: "Leave it.",
            AnswerDes2: "You provoked the soul of the sword. It flew to you and stabbed your ass. You lost {0} hp.",
            Reward2: 13,
            Reward02: -50
        }), n.LevelEvent.set(12, {
            eventType: 2,
            eventDes: "You meet a grey-haired orc. He asks for 50 golds.",
            Answer1: "Give him.",
            AnswerDes1: "He took the golds and left happily. You lost {0} golds.",
            Reward1: 4,
            Reward01: -50,
            Answer2: "Leave",
            AnswerDes2: "He beat your head with a stick and robbed you {0} golds.",
            Reward2: 14,
            Reward02: -100
        }), n.LevelEvent.set(13, {
            eventType: 2,
            eventDes: "You meet a grey-haired orc. He asks for 50 golds.",
            Answer1: "Give him.",
            AnswerDes1: "He appreciated your kindness so he didn't take your golds. In addition",
            Reward1: 1,
            Reward01: 3,
            Answer2: "Leave",
            AnswerDes2: "The old orc looked at you sadly. Nothing happened.",
            Reward2: 0,
            Reward02: 0
        }), n.LevelEvent.set(14, {
            eventType: 2,
            eventDes: "You meet a grey-haired orc. He asks for 50 golds.",
            Answer1: "Give him.",
            AnswerDes1: "He saw your bag filled with golds and robbed you {0} golds.",
            Reward1: 14,
            Reward01: -30,
            Answer2: "Leave",
            AnswerDes2: "He tried to rob you,but you stunned him. Luckily you found a shield in his pocket. Your armor is increased by {0}.",
            Reward2: 12,
            Reward02: 20
        }), cc._RF.pop()
    }, {}],
    LevelInfoPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "bf8e3xfBfVJKbpLcsgEboUi", "LevelInfoPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.levelInfoPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                null == this.levelInfoPoolList && (this.levelInfoPoolList = new cc.NodePool);
                for (var e = 0; e < 25; ++e) {
                    var t = cc.instantiate(this.levelInfoPrefab);
                    this.levelInfoPoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t) {
                var n = null;
                return (n = 0 < this.levelInfoPoolList.size() ? this.levelInfoPoolList.get() : cc.instantiate(this.levelInfoPrefab)).parent = e, n.position = t, n
            }, e.prototype.PutItem = function (e) {
                this.levelInfoPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.levelInfoPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "levelInfoPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    LevelInfo: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d4b97qKS8lP6Zi3n9RMoLfV", "LevelInfo"), Object.defineProperty(n, "__esModule", {value: !0}), n.LevelInfo = new Map, n.LevelInfo.set(1, {
            preLevel: 0,
            positionX: 36,
            positionY: 144,
            hpParam: 1,
            atkParam: 1,
            maxSteps: 100,
            reward: 300,
            levelEvent: 1,
            bg: 0,
            sword: 40,
            potion: 20,
            coin: 20,
            sheild: 20
        }), n.LevelInfo.set(2, {
            preLevel: 1,
            positionX: -19,
            positionY: 529,
            hpParam: 1.3,
            atkParam: 1.3,
            maxSteps: 150,
            reward: 500,
            levelEvent: 1,
            bg: 0,
            sword: 40,
            potion: 20,
            coin: 20,
            sheild: 20
        }), n.LevelInfo.set(3, {
            preLevel: 2,
            positionX: -312,
            positionY: 747,
            hpParam: 1.6,
            atkParam: 1.6,
            maxSteps: 150,
            reward: 700,
            levelEvent: 1,
            bg: 0,
            sword: 35,
            potion: 21,
            coin: 21,
            sheild: 23
        }), n.LevelInfo.set(4, {
            preLevel: 2,
            positionX: 343,
            positionY: 704,
            hpParam: 1.9,
            atkParam: 1.9,
            maxSteps: 200,
            reward: 900,
            levelEvent: 1,
            bg: 0,
            sword: 35,
            potion: 21,
            coin: 21,
            sheild: 23
        }), n.LevelInfo.set(5, {
            preLevel: 4,
            positionX: 405,
            positionY: 1086,
            hpParam: 2.2,
            atkParam: 2.2,
            maxSteps: 0,
            reward: 1100,
            levelEvent: 2,
            bg: 1,
            sword: 35,
            potion: 21,
            coin: 21,
            sheild: 23
        }), n.LevelInfo.set(6, {
            preLevel: 3,
            positionX: -475,
            positionY: 983,
            hpParam: 2.5,
            atkParam: 2.5,
            maxSteps: 200,
            reward: 1300,
            levelEvent: 1,
            bg: 1,
            sword: 35,
            potion: 21,
            coin: 21,
            sheild: 23
        }), n.LevelInfo.set(7, {
            preLevel: 6,
            positionX: 25,
            positionY: 1570,
            hpParam: 2.8,
            atkParam: 2.8,
            maxSteps: 200,
            reward: 1500,
            levelEvent: 1,
            bg: 1,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(8, {
            preLevel: 7,
            positionX: -300,
            positionY: 1700,
            hpParam: 3.1,
            atkParam: 3.1,
            maxSteps: 0,
            reward: 1700,
            levelEvent: 2,
            bg: 1,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(9, {
            preLevel: 7,
            positionX: 347,
            positionY: 1810,
            hpParam: 3.4,
            atkParam: 3.4,
            maxSteps: 0,
            reward: 5e3,
            levelEvent: 3001,
            bg: 2,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(10, {
            preLevel: 9,
            positionX: 133,
            positionY: 2054,
            hpParam: 3.7,
            atkParam: 3.7,
            maxSteps: 250,
            reward: 2100,
            levelEvent: 1,
            bg: 2,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(11, {
            preLevel: 10,
            positionX: 340,
            positionY: 2386,
            hpParam: 4,
            atkParam: 4,
            maxSteps: 250,
            reward: 2300,
            levelEvent: 1,
            bg: 2,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(12, {
            preLevel: 10,
            positionX: -294,
            positionY: 2626,
            hpParam: 4.3,
            atkParam: 4.3,
            maxSteps: 0,
            reward: 2500,
            levelEvent: 2,
            bg: 2,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(13, {
            preLevel: 11,
            positionX: 239,
            positionY: 2822,
            hpParam: 4.6,
            atkParam: 4.6,
            maxSteps: 0,
            reward: 2700,
            levelEvent: 2,
            bg: 3,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(14, {
            preLevel: 13,
            positionX: -45,
            positionY: 3099,
            hpParam: 4.9,
            atkParam: 4.9,
            maxSteps: 250,
            reward: 2900,
            levelEvent: 1,
            bg: 3,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(15, {
            preLevel: 14,
            positionX: 445,
            positionY: 3506,
            hpParam: 5.2,
            atkParam: 5.2,
            maxSteps: 0,
            reward: 3100,
            levelEvent: 2,
            bg: 3,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(16, {
            preLevel: 14,
            positionX: -259,
            positionY: 3467,
            hpParam: 5.5,
            atkParam: 5.5,
            maxSteps: 250,
            reward: 3300,
            levelEvent: 1,
            bg: 3,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(17, {
            preLevel: 16,
            positionX: 121,
            positionY: 3864,
            hpParam: 5.8,
            atkParam: 5.8,
            maxSteps: 0,
            reward: 1e4,
            levelEvent: 3002,
            bg: 4,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(18, {
            preLevel: 17,
            positionX: -261,
            positionY: 4054,
            hpParam: 6.1,
            atkParam: 6.1,
            maxSteps: 250,
            reward: 3700,
            levelEvent: 1,
            bg: 4,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(19, {
            preLevel: 17,
            positionX: -103,
            positionY: 4233,
            hpParam: 6.4,
            atkParam: 6.4,
            maxSteps: 0,
            reward: 3900,
            levelEvent: 2,
            bg: 4,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(20, {
            preLevel: 17,
            positionX: 160,
            positionY: 4194,
            hpParam: 6.7,
            atkParam: 6.7,
            maxSteps: 250,
            reward: 4100,
            levelEvent: 1,
            bg: 4,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(21, {
            preLevel: 18,
            positionX: -428,
            positionY: 4374,
            hpParam: 7,
            atkParam: 7,
            maxSteps: 0,
            reward: 4300,
            levelEvent: 2,
            bg: 5,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(22, {
            preLevel: 20,
            positionX: 219,
            positionY: 4567,
            hpParam: 7.3,
            atkParam: 7.3,
            maxSteps: 300,
            reward: 4500,
            levelEvent: 1,
            bg: 5,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(23, {
            preLevel: 22,
            positionX: -429,
            positionY: 4915,
            hpParam: 7.6,
            atkParam: 7.6,
            maxSteps: 300,
            reward: 4700,
            levelEvent: 1,
            bg: 5,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(24, {
            preLevel: 23,
            positionX: 144,
            positionY: 5206,
            hpParam: 7.9,
            atkParam: 7.9,
            maxSteps: 300,
            reward: 4900,
            levelEvent: 1,
            bg: 5,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), n.LevelInfo.set(25, {
            preLevel: 24,
            positionX: -58,
            positionY: 5583,
            hpParam: 8.2,
            atkParam: 8.2,
            maxSteps: 0,
            reward: 0,
            levelEvent: 3003,
            bg: 5,
            sword: 30,
            potion: 23,
            coin: 23,
            sheild: 24
        }), cc._RF.pop()
    }, {}],
    LevelNodeInfo: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "76ea3oeHhBFo4PDvkusVzu8", "LevelNodeInfo"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../Manager/GameManager"), a = e("../UI/UIPanelController"), l = e("../Eume/LevelType "),
            r = e("../Manager/ItemManager"), i = e("../Manager/AdManager"), s = cc._decorator, c = s.ccclass,
            p = (s.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.levelId = 0, e.levelEvent = 0, e.levelStatus = -1, e
                }

                return __extends(e, t), e.prototype.init = function (e, t, n) {
                    this.levelId = e, this.levelEvent = t, this.node.getChildByName("num").getComponent(cc.Label).string = e.toString(), this.onShowLevelEventCallback = n, this.node.on("click", this.clickCallback, this)
                }, e.prototype.getLevelId = function () {
                    return this.levelId
                }, e.prototype.refreshStatus = function (e) {
                    this.levelStatus = e, this.showLevelNode()
                }, e.prototype.PlayEffect = function () {
                    var e = new cc.Vec2(0, 120), t = new cc.Vec2(0, 90);
                    this.markAction = cc.repeatForever(cc.sequence(cc.moveTo(.5, e), cc.moveTo(.5, t))), this.node.getChildByName("mark").runAction(this.markAction)
                }, e.prototype.showLevelNode = function () {
                    if (this.node.getChildByName("mark").active = 0 == this.levelStatus, 0 == this.levelStatus && (null != this.markAction && this.node.stopAction(this.markAction), this.PlayEffect()), -1 == this.levelStatus) this.node.getChildByName("level").getComponent(cc.Sprite).spriteFrame = o.default.inst.icons.levelItems[0]; else if (0 == this.levelStatus) {
                        var e = void 0;
                        e = this.levelEvent == l.LevelType.normal ? o.default.inst.icons.levelItems[1] : this.levelEvent == l.LevelType.event ? o.default.inst.icons.levelItems[2] : o.default.inst.icons.levelItems[3], this.node.getChildByName("level").getComponent(cc.Sprite).spriteFrame = e
                    } else if (1 == this.levelStatus) {
                        e = void 0;
                        e = this.levelEvent == l.LevelType.normal ? o.default.inst.icons.levelItems[4] : this.levelEvent == l.LevelType.event ? o.default.inst.icons.levelItems[5] : o.default.inst.icons.levelItems[6], this.node.getChildByName("level").getComponent(cc.Sprite).spriteFrame = e
                    }
                }, e.prototype.clickCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var t;
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return 0 != this.levelStatus ? [3, 4] : (o.default.inst.playerInfo.setCurLevel(this.levelId, this.levelEvent), this.levelEvent != l.LevelType.event ? [3, 1] : (this.onShowLevelEventCallback(), [3, 3]));
                                case 1:
                                    return o.default.inst.showLevelPanel(!1), null == a.default.instance ? o.default.inst.uiPanelController.init() : a.default.instance.mainUIPanel.LevelUpRefresh(this.levelId), [4, i.default.inst.show()];
                                case 2:
                                    e.sent(), r.ItemManager.inst.CreateImage(), t = 3e3 < this.levelEvent, o.default.inst.showLevelBoss(t, this.levelEvent), e.label = 3;
                                case 3:
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.onDestroy = function () {
                    this.node.off("click", this.clickCallback, this)
                }, e = __decorate([c], e)
            }(cc.Component));
        n.default = p, cc._RF.pop()
    }, {
        "../Eume/LevelType ": "LevelType ",
        "../Manager/AdManager": "AdManager",
        "../Manager/GameManager": "GameManager",
        "../Manager/ItemManager": "ItemManager",
        "../UI/UIPanelController": "UIPanelController"
    }],
    LevelPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0c256Dw1n9Db6rHMFduCOpN", "LevelPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../Data/LevelInfo"), a = e("../Model/LevelNodeInfo"), l = e("../charactor/PlayerInfo"),
            r = e("../Manager/GameManager"), i = e("./PlayerInfoPanel"), s = e("./PropItem"),
            c = e("./LevelEventPanel"), p = e("./TreasureBoxPrizePanel"), u = e("../Manager/AdManager"),
            d = e("../Platform/PersistentManager"), v = cc._decorator, A = v.ccclass, h = v.property, m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.levelParent = null, e.levelEvent = null, e.path = null, e.hp = null, e.armor = null, e.money = null, e.playerInfoPanel = null, e.hpValue = null, e.hpMaxValue = null, e.armorValue = null, e.armorMaxValue = null, e.bag = null, e.propListNode = null, e.propDes = null, e.bagPanel = null, e.bagBlack = null, e.treasurePanel = null, e.adBtn = null, e.adReward = null, e.progressWidth = 750, e
                }

                return __extends(e, t), e.prototype.init = function () {
                    var a = this;
                    this.showAdBtn(!1), this.propNodeMap = new Map;
                    for (var e = 0; e < 12; e++) {
                        r.default.inst.propPool.GetPropItem(this.propListNode).active = !1
                    }
                    if (0 < this.levelParent.childrenCount) for (e = 0; e < this.levelParent.childrenCount; e++) {
                        var t = this.levelParent.children[e];
                        r.default.inst.levelInfoPool.PutItem(t)
                    }
                    this.levelNodeList = [];
                    for (e = 0; e < this.path.childrenCount; e++) this.path.children[e].active = !1;
                    o.LevelInfo.forEach(function (e, t) {
                        var n;
                        n = new cc.Vec2(e.positionX, e.positionY);
                        var o = r.default.inst.levelInfoPool.CreateItem(a.levelParent, n).getComponent("LevelNodeInfo");
                        o.init(t, e.levelEvent, function () {
                            a.showLevelEventPanel()
                        }), a.levelNodeList.push(o)
                    }), this.refreshLevel()
                },e.prototype.onLoad = function(){
                    sceneManager.autoResize(1080, 1920);
                },
                    e.prototype.start=function(){
                    console.log("LevelPanel======>>>>>>",this.node)
                        uiManager.seekNodeWithName("moreGameBtn", this.node).active = false;
                        shareBtn
                        var shareBtn = uiManager.seekNodeWithName("shareBtn", this.node);
                        var widget = shareBtn.addComponent(cc.Widget);
                        widget.target = cc.find("Canvas");
                        widget.isAlignTop=true;
                        widget.top =400;
                        widget.isAlignBottomn=false;

                    this.node.scale = sceneManager.getSceneScale();
                    // var Bg = uiManager.seekNodeWithName("ScrollView", this.node);
                    // Bg.scale = 1.1
                    // var widget = Bg.addComponent(cc.Widget);
                    // widget.isAlignTop = true;
                    // widget.top = 0;
                    // widget.target = cc.find("Canvas");
                }, e.prototype.refreshLevel = function () {
                    if (this.refreshPlayerInfo(), 0 == l.PlayerData.completeLevelList.length) for (var e = 0; e < this.path.childrenCount; e++) this.path.children[e].active = !1;
                    for (e = 0; e < this.levelNodeList.length; e++) {
                        var t = this.levelNodeList[e].getComponent(a.default);
                        if (0 < l.PlayerData.completeLevelList.length) if (-1 == l.PlayerData.completeLevelList.indexOf(t.getLevelId())) -1 == l.PlayerData.completeLevelList.indexOf(o.LevelInfo.get(t.getLevelId()).preLevel) ? t.refreshStatus(-1) : (this.path.children[t.getLevelId() - 2].active = !0, t.refreshStatus(0)); else 1 < t.getLevelId() && (this.path.children[t.getLevelId() - 2].active = !0), t.refreshStatus(1); else 1 == t.getLevelId() ? t.refreshStatus(0) : t.refreshStatus(-1)
                    }
                    this.RefreshPropList()
                }, e.prototype.refreshPlayerInfo = function () {
                    this.refreshPlayerArmor(), this.refreshPlayerHp(), this.refreshPlayerMoney()
                }, e.prototype.refreshPlayerMoney = function () {
                    this.money.string = l.PlayerData.money.toString()
                }, e.prototype.refreshPlayerArmor = function () {
                    this.armorMaxValue.string = l.PlayerData.maxArmor.toString(), this.armorValue.string = l.PlayerData.curArmor.toString(), this.armor.children[0].width = l.PlayerData.curArmor / l.PlayerData.maxArmor * this.progressWidth
                }, e.prototype.refreshPlayerHp = function () {
                    this.hpMaxValue.string = l.PlayerData.maxHp.toString(), this.hpValue.string = l.PlayerData.curHp.toString(), this.hp.children[0].width = l.PlayerData.curHp / l.PlayerData.maxHp * this.progressWidth
                }, e.prototype.RefreshPropList = function () {
                    for (var e = Array.from(l.PlayerData.propMap.keys()), t = 0; t < this.propListNode.childrenCount; t++) {
                        var n = this.propListNode.children[t];
                        t < l.PlayerData.propMap.size ? (n.active = !0, 10001 == e[t] || 10002 == e[t] ? n.children[0].color = cc.Color.WHITE : n.children[0].color = cc.Color.GRAY, n.getComponent(s.default).InitPropItem(e[t])) : n.active = !1
                    }
                }, e.prototype.PropItemCountDown = function () {
                    this.refreshPlayerInfo();
                    for (var e = 0; e < this.propListNode.childrenCount; e++) {
                        this.propListNode.children[e].getComponent("PropItem").CountDown()
                    }
                }, e.prototype.RefreshPropDes = function (e, t) {
                    void 0 === t && (t = ""), this.propDes.node.active = e, this.propDes.string = t
                }, e.prototype.openTreasurePanel = function () {
                    var e = this;
                    if ("undefined" != typeof FBInstant) {
                        var t = FBInstant.getPlatform();
                        "WEB" == t ? console.log(t) : u.default.inst.showVideo(function () {
                            e.treasurePanel.InitPanel(200001);
                            FBInstant.logEvent("show_video")
                        })
                    } else this.treasurePanel.InitPanel(200001)
                }, e.prototype.openBagUI = function () {
                    this.bag.active = !0, this.PlayOpenBagPanel()
                }, e.prototype.closeBagUI = function () {
                    this.PlayCloseBagPanel()
                }, e.prototype.PlayOpenBagPanel = function () {
                    var e = cc.callFunc(function () {
                    }), t = cc.sequence(cc.moveTo(.6, cc.Vec2.ZERO), e);
                    t.easing(cc.easeInOut(3)), this.bagPanel.runAction(t);
                    var n = cc.fadeTo(.6, 128);
                    this.bagBlack.runAction(n)
                }, e.prototype.PlayCloseBagPanel = function () {
                    var e = this, t = cc.callFunc(function () {
                        e.bag.active = !1
                    }), n = new cc.Vec2(0, -570), o = cc.sequence(cc.moveTo(.6, n), t);
                    o.easing(cc.easeInOut(3)), this.bagPanel.runAction(o);
                    var a = cc.fadeTo(.6, 0);
                    this.bagBlack.runAction(a)
                }, e.prototype.openPlayInfoPanel = function () {
                    this.playerInfoPanel.node.active = !0, this.playerInfoPanel.InitPlayerInfoPanel()
                }, e.prototype.showLevelEventPanel = function () {
                    this.levelEvent.active = !0, this.levelEvent.getComponent(c.default).init()
                }, e.prototype.showAdBtn = function (e) {
                    this.adBtn.active = e, (this.adReward.active = e) ? (this.adBtnAction = cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.4), cc.scaleTo(.4, 1), cc.delayTime(1))), this.adBtn.runAction(this.adBtnAction)) : null != this.adBtnAction && (this.adBtn.stopAction(this.adBtnAction), this.adBtnAction = null)
                }, e.prototype.deleteEvent = function () {
                    null != this.adBtnAction && (this.adBtn.stopAction(this.adBtnAction), this.adBtnAction = null)
                }, e.prototype.initPlayerData = function () {
                    d.default.inst.save(!0), this.refreshLevel()
                }, __decorate([h(cc.Node)], e.prototype, "levelParent", void 0), __decorate([h(cc.Node)], e.prototype, "levelEvent", void 0), __decorate([h(cc.Node)], e.prototype, "path", void 0), __decorate([h(cc.Node)], e.prototype, "hp", void 0), __decorate([h(cc.Node)], e.prototype, "armor", void 0), __decorate([h(cc.Label)], e.prototype, "money", void 0), __decorate([h(i.default)], e.prototype, "playerInfoPanel", void 0), __decorate([h(cc.Label)], e.prototype, "hpValue", void 0), __decorate([h(cc.Label)], e.prototype, "hpMaxValue", void 0), __decorate([h(cc.Label)], e.prototype, "armorValue", void 0), __decorate([h(cc.Label)], e.prototype, "armorMaxValue", void 0), __decorate([h(cc.Node)], e.prototype, "bag", void 0), __decorate([h(cc.Node)], e.prototype, "propListNode", void 0), __decorate([h(cc.Label)], e.prototype, "propDes", void 0), __decorate([h(cc.Node)], e.prototype, "bagPanel", void 0), __decorate([h(cc.Node)], e.prototype, "bagBlack", void 0), __decorate([h(p.default)], e.prototype, "treasurePanel", void 0), __decorate([h(cc.Node)], e.prototype, "adBtn", void 0), __decorate([h(cc.Node)], e.prototype, "adReward", void 0), e = __decorate([A], e)
            }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "../Data/LevelInfo": "LevelInfo",
        "../Manager/AdManager": "AdManager",
        "../Manager/GameManager": "GameManager",
        "../Model/LevelNodeInfo": "LevelNodeInfo",
        "../Platform/PersistentManager": "PersistentManager",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./LevelEventPanel": "LevelEventPanel",
        "./PlayerInfoPanel": "PlayerInfoPanel",
        "./PropItem": "PropItem",
        "./TreasureBoxPrizePanel": "TreasureBoxPrizePanel"
    }],
    "LevelType ": [function (e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "85fa2Dm5m9Pvaaatsf++vpe", "LevelType "), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.LevelType || (n.LevelType = {}))[o.normal = 1] = "normal", o[o.event = 2] = "event", o[o.boss = 3e3] = "boss", cc._RF.pop()
    }, {}],
    Level: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "eb62bPDNKdLCb99kXARSjUU", "Level"), Object.defineProperty(n, "__esModule", {value: !0}), n.Level = [{
            level: 1,
            steps: 10,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 1, steps: 20, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 1,
            steps: 30,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 1, steps: 40, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 1,
            steps: 50,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 1, steps: 60, eventType: 3, eventId: 900001, eventParam: 1}, {
            level: 1,
            steps: 70,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 1, steps: 80, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 1,
            steps: 90,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 1, steps: 100, eventType: 4, eventId: 900001, eventParam: 2}, {
            level: 2,
            steps: 10,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 2, steps: 20, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 2,
            steps: 30,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 2, steps: 40, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 2,
            steps: 50,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 2, steps: 60, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 2,
            steps: 70,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 2, steps: 80, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 2,
            steps: 90,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 2, steps: 100, eventType: 3, eventId: 900001, eventParam: 1}, {
            level: 2,
            steps: 110,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 2, steps: 120, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 2,
            steps: 130,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 2, steps: 140, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 2,
            steps: 150,
            eventType: 4,
            eventId: 900001,
            eventParam: 2
        }, {level: 3, steps: 10, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 3,
            steps: 20,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 3, steps: 30, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 3,
            steps: 40,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 3, steps: 50, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 3,
            steps: 60,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 3, steps: 70, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 3,
            steps: 80,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 3, steps: 90, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 3,
            steps: 100,
            eventType: 3,
            eventId: 900001,
            eventParam: 1
        }, {level: 3, steps: 110, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 3,
            steps: 120,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 3, steps: 130, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 3,
            steps: 140,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 3, steps: 150, eventType: 4, eventId: 900001, eventParam: 2}, {
            level: 4,
            steps: 10,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 20, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 4,
            steps: 30,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 40, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 4,
            steps: 50,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 60, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 4,
            steps: 70,
            eventType: 3,
            eventId: 900001,
            eventParam: 1
        }, {level: 4, steps: 80, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 4,
            steps: 90,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 100, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 4,
            steps: 110,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 120, eventType: 3, eventId: 900001, eventParam: 1}, {
            level: 4,
            steps: 130,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 140, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 4,
            steps: 150,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 4, steps: 160, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 4,
            steps: 170,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 180, eventType: 1, eventId: 100001, eventParam: 0}, {
            level: 4,
            steps: 190,
            eventType: 1,
            eventId: 100001,
            eventParam: 0
        }, {level: 4, steps: 200, eventType: 4, eventId: 900001, eventParam: 2}, {
            level: 6,
            steps: 10,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 20, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 6,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 6, steps: 40, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 6,
            steps: 50,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 60, eventType: 3, eventId: 900002, eventParam: 1}, {
            level: 6,
            steps: 70,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 80, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 6,
            steps: 90,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 6,
            steps: 110,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 120, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 6,
            steps: 130,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 140, eventType: 3, eventId: 900002, eventParam: 1}, {
            level: 6,
            steps: 150,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 160, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 6,
            steps: 170,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 180, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 6,
            steps: 190,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 6, steps: 200, eventType: 4, eventId: 900002, eventParam: 2}, {
            level: 7,
            steps: 10,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 20, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 7,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 7, steps: 40, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 7,
            steps: 50,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 60, eventType: 3, eventId: 900002, eventParam: 1}, {
            level: 7,
            steps: 70,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 80, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 7,
            steps: 90,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 7,
            steps: 110,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 120, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 7,
            steps: 130,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 140, eventType: 3, eventId: 900002, eventParam: 1}, {
            level: 7,
            steps: 150,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 160, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 7,
            steps: 170,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 180, eventType: 1, eventId: 100002, eventParam: 0}, {
            level: 7,
            steps: 190,
            eventType: 1,
            eventId: 100002,
            eventParam: 0
        }, {level: 7, steps: 200, eventType: 4, eventId: 900002, eventParam: 2}, {
            level: 10,
            steps: 10,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 20, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 10, steps: 40, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 50,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 60, eventType: 3, eventId: 900003, eventParam: 2}, {
            level: 10,
            steps: 70,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 80, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 90,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 10,
            steps: 110,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 120, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 130,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 140, eventType: 3, eventId: 900003, eventParam: 2}, {
            level: 10,
            steps: 150,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 160, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 170,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 180, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 190,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 200, eventType: 3, eventId: 900003, eventParam: 3}, {
            level: 10,
            steps: 210,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 220, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 230,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 10, steps: 240, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 10,
            steps: 250,
            eventType: 4,
            eventId: 900003,
            eventParam: 3
        }, {level: 11, steps: 10, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 20,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 30, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 11,
            steps: 40,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 50, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 60,
            eventType: 3,
            eventId: 900003,
            eventParam: 2
        }, {level: 11, steps: 70, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 80,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 90, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 100,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 11, steps: 110, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 120,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 130, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 140,
            eventType: 3,
            eventId: 900003,
            eventParam: 2
        }, {level: 11, steps: 150, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 160,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 170, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 180,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 190, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 200,
            eventType: 3,
            eventId: 900003,
            eventParam: 3
        }, {level: 11, steps: 210, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 220,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 230, eventType: 1, eventId: 100003, eventParam: 0}, {
            level: 11,
            steps: 240,
            eventType: 1,
            eventId: 100003,
            eventParam: 0
        }, {level: 11, steps: 250, eventType: 4, eventId: 900003, eventParam: 3}, {
            level: 14,
            steps: 10,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 20, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 14, steps: 40, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 50,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 60, eventType: 3, eventId: 900004, eventParam: 2}, {
            level: 14,
            steps: 70,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 80, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 90,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 14,
            steps: 110,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 120, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 130,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 140, eventType: 3, eventId: 900004, eventParam: 2}, {
            level: 14,
            steps: 150,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 160, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 170,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 180, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 190,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 200, eventType: 3, eventId: 900004, eventParam: 3}, {
            level: 14,
            steps: 210,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 220, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 230,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 14, steps: 240, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 14,
            steps: 250,
            eventType: 4,
            eventId: 900004,
            eventParam: 3
        }, {level: 16, steps: 10, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 20,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 30, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 16,
            steps: 40,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 50, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 60,
            eventType: 3,
            eventId: 900004,
            eventParam: 2
        }, {level: 16, steps: 70, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 80,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 90, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 100,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 16, steps: 110, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 120,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 130, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 140,
            eventType: 3,
            eventId: 900004,
            eventParam: 2
        }, {level: 16, steps: 150, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 160,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 170, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 180,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 190, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 200,
            eventType: 3,
            eventId: 900004,
            eventParam: 3
        }, {level: 16, steps: 210, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 220,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 230, eventType: 1, eventId: 100004, eventParam: 0}, {
            level: 16,
            steps: 240,
            eventType: 1,
            eventId: 100004,
            eventParam: 0
        }, {level: 16, steps: 250, eventType: 4, eventId: 900004, eventParam: 3}, {
            level: 18,
            steps: 10,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 20, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 18, steps: 40, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 50,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 60, eventType: 3, eventId: 900005, eventParam: 3}, {
            level: 18,
            steps: 70,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 80, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 90,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 18,
            steps: 110,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 120, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 130,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 140, eventType: 3, eventId: 900005, eventParam: 3}, {
            level: 18,
            steps: 150,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 160, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 170,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 180, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 190,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 200, eventType: 3, eventId: 900005, eventParam: 4}, {
            level: 18,
            steps: 210,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 220, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 230,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 18, steps: 240, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 18,
            steps: 250,
            eventType: 4,
            eventId: 900005,
            eventParam: 4
        }, {level: 20, steps: 10, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 20,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 30, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 20,
            steps: 40,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 50, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 60,
            eventType: 3,
            eventId: 900005,
            eventParam: 3
        }, {level: 20, steps: 70, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 80,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 90, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 100,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 20, steps: 110, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 120,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 130, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 140,
            eventType: 3,
            eventId: 900005,
            eventParam: 3
        }, {level: 20, steps: 150, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 160,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 170, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 180,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 190, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 200,
            eventType: 3,
            eventId: 900005,
            eventParam: 4
        }, {level: 20, steps: 210, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 220,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 230, eventType: 1, eventId: 100005, eventParam: 0}, {
            level: 20,
            steps: 240,
            eventType: 1,
            eventId: 100005,
            eventParam: 0
        }, {level: 20, steps: 250, eventType: 4, eventId: 900005, eventParam: 4}, {
            level: 22,
            steps: 10,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 20, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 22, steps: 40, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 50,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 60, eventType: 3, eventId: 900006, eventParam: 3}, {
            level: 22,
            steps: 70,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 80, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 90,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 22,
            steps: 110,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 120, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 130,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 140, eventType: 3, eventId: 900006, eventParam: 3}, {
            level: 22,
            steps: 150,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 160, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 170,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 180, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 22,
            steps: 190,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 200, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 210,
            eventType: 3,
            eventId: 900006,
            eventParam: 3
        }, {level: 22, steps: 220, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 230,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 240, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 250,
            eventType: 3,
            eventId: 900006,
            eventParam: 4
        }, {level: 22, steps: 260, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 270,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 280, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 22,
            steps: 290,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 22, steps: 300, eventType: 4, eventId: 900006, eventParam: 4}, {
            level: 23,
            steps: 10,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 20, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 23, steps: 40, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 50,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 60, eventType: 3, eventId: 900006, eventParam: 3}, {
            level: 23,
            steps: 70,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 80, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 90,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 23,
            steps: 110,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 120, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 130,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 140, eventType: 3, eventId: 900006, eventParam: 3}, {
            level: 23,
            steps: 150,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 160, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 170,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 180, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 23,
            steps: 190,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 200, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 210,
            eventType: 3,
            eventId: 900006,
            eventParam: 3
        }, {level: 23, steps: 220, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 230,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 240, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 250,
            eventType: 3,
            eventId: 900006,
            eventParam: 4
        }, {level: 23, steps: 260, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 270,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 280, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 23,
            steps: 290,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 23, steps: 300, eventType: 4, eventId: 900006, eventParam: 4}, {
            level: 24,
            steps: 10,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 20, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 30,
            eventType: 2,
            eventId: 200001,
            eventParam: 0
        }, {level: 24, steps: 40, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 50,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 60, eventType: 3, eventId: 900006, eventParam: 3}, {
            level: 24,
            steps: 70,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 80, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 90,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 100, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 24,
            steps: 110,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 120, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 130,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 140, eventType: 3, eventId: 900006, eventParam: 3}, {
            level: 24,
            steps: 150,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 160, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 170,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 180, eventType: 2, eventId: 200001, eventParam: 0}, {
            level: 24,
            steps: 190,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 200, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 210,
            eventType: 3,
            eventId: 900006,
            eventParam: 3
        }, {level: 24, steps: 220, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 230,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 240, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 250,
            eventType: 3,
            eventId: 900006,
            eventParam: 4
        }, {level: 24, steps: 260, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 270,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 280, eventType: 1, eventId: 100006, eventParam: 0}, {
            level: 24,
            steps: 290,
            eventType: 1,
            eventId: 100006,
            eventParam: 0
        }, {level: 24, steps: 300, eventType: 4, eventId: 900006, eventParam: 4}], cc._RF.pop()
    }, {}],
    LoginPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9e315yoOd1H2pZpTwV9U0Gx", "LoginPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../Manager/GameManager"), a = cc._decorator, l = a.ccclass, r = a.property, i = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.startGame = null, e
            }

            return __extends(e, t), e.prototype.onEnable = function () {
                sceneManager.addMoreBtn(function(node){
                    var widget = node.getComponent(cc.Widget);
                    widget.isAlignLeft = true;
                    widget.isAlignRight = false;
                    widget.left =50;
                    widget.isAlignTop = true;
                    widget.isAlignBottom = false;
                    widget.top =220;
                    widget.updateAlignment();
                });
                sceneManager.showDirect();

                console.log("11111", this.node)
                uiManager.seekNodeWithName("login", this.node).active = false;
                this.startGame.on("click", this.onStartGame, this)
            }, e.prototype.onDisable = function () {
                this.startGame.off("click", this.onStartGame, this)
            }, e.prototype.onStartGame = function () {
                o.default.inst.login()
            }, __decorate([r(cc.Node)], e.prototype, "startGame", void 0), e = __decorate([l], e)
        }(cc.Component);
        n.default = i, cc._RF.pop()
    }, {"../Manager/GameManager": "GameManager"}],
    LvUp: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "66f68Ua1e5PyZVHCeIE/bjz", "LvUp"), Object.defineProperty(n, "__esModule", {value: !0}), n.LvUp = new Map, n.LvUp.set(1, {
            atk: 3,
            atkCost: 100,
            def: 50,
            defCost: 100,
            hp: 100,
            hpCost: 100
        }), n.LvUp.set(2, {atk: 6, atkCost: 200, def: 80, defCost: 200, hp: 150, hpCost: 200}), n.LvUp.set(3, {
            atk: 9,
            atkCost: 300,
            def: 110,
            defCost: 300,
            hp: 200,
            hpCost: 300
        }), n.LvUp.set(4, {
            atk: 12,
            atkCost: 400,
            def: 140,
            defCost: 400,
            hp: 250,
            hpCost: 400
        }), n.LvUp.set(5, {
            atk: 15,
            atkCost: 600,
            def: 170,
            defCost: 600,
            hp: 300,
            hpCost: 600
        }), n.LvUp.set(6, {
            atk: 18,
            atkCost: 800,
            def: 200,
            defCost: 800,
            hp: 350,
            hpCost: 800
        }), n.LvUp.set(7, {
            atk: 21,
            atkCost: 1e3,
            def: 230,
            defCost: 1e3,
            hp: 400,
            hpCost: 1e3
        }), n.LvUp.set(8, {
            atk: 24,
            atkCost: 1200,
            def: 260,
            defCost: 1200,
            hp: 450,
            hpCost: 1200
        }), n.LvUp.set(9, {
            atk: 27,
            atkCost: 1400,
            def: 290,
            defCost: 1400,
            hp: 500,
            hpCost: 1400
        }), n.LvUp.set(10, {
            atk: 30,
            atkCost: 1600,
            def: 320,
            defCost: 1600,
            hp: 550,
            hpCost: 1600
        }), n.LvUp.set(11, {
            atk: 33,
            atkCost: 2e3,
            def: 350,
            defCost: 2e3,
            hp: 600,
            hpCost: 2e3
        }), n.LvUp.set(12, {
            atk: 36,
            atkCost: 2400,
            def: 380,
            defCost: 2400,
            hp: 650,
            hpCost: 2400
        }), n.LvUp.set(13, {
            atk: 39,
            atkCost: 2800,
            def: 410,
            defCost: 2800,
            hp: 700,
            hpCost: 2800
        }), n.LvUp.set(14, {
            atk: 42,
            atkCost: 3200,
            def: 440,
            defCost: 3200,
            hp: 750,
            hpCost: 3200
        }), n.LvUp.set(15, {
            atk: 45,
            atkCost: 3600,
            def: 470,
            defCost: 3600,
            hp: 800,
            hpCost: 3600
        }), n.LvUp.set(16, {
            atk: 48,
            atkCost: 4e3,
            def: 500,
            defCost: 4e3,
            hp: 850,
            hpCost: 4e3
        }), n.LvUp.set(17, {
            atk: 51,
            atkCost: 4500,
            def: 530,
            defCost: 4500,
            hp: 900,
            hpCost: 4500
        }), n.LvUp.set(18, {
            atk: 54,
            atkCost: 5e3,
            def: 560,
            defCost: 5e3,
            hp: 950,
            hpCost: 5e3
        }), n.LvUp.set(19, {
            atk: 57,
            atkCost: 5500,
            def: 590,
            defCost: 5500,
            hp: 1e3,
            hpCost: 5500
        }), n.LvUp.set(20, {
            atk: 60,
            atkCost: 6e3,
            def: 620,
            defCost: 6e3,
            hp: 1050,
            hpCost: 6e3
        }), n.LvUp.set(21, {
            atk: 63,
            atkCost: 7e3,
            def: 650,
            defCost: 7e3,
            hp: 1100,
            hpCost: 7e3
        }), n.LvUp.set(22, {
            atk: 66,
            atkCost: 8e3,
            def: 680,
            defCost: 8e3,
            hp: 1150,
            hpCost: 8e3
        }), n.LvUp.set(23, {
            atk: 69,
            atkCost: 9e3,
            def: 710,
            defCost: 9e3,
            hp: 1200,
            hpCost: 9e3
        }), n.LvUp.set(24, {
            atk: 72,
            atkCost: 1e4,
            def: 740,
            defCost: 1e4,
            hp: 1250,
            hpCost: 1e4
        }), n.LvUp.set(25, {
            atk: 75,
            atkCost: 11e3,
            def: 770,
            defCost: 11e3,
            hp: 1300,
            hpCost: 11e3
        }), n.LvUp.set(26, {
            atk: 78,
            atkCost: 13e3,
            def: 800,
            defCost: 12e3,
            hp: 1350,
            hpCost: 12e3
        }), n.LvUp.set(27, {
            atk: 81,
            atkCost: 15e3,
            def: 830,
            defCost: 13e3,
            hp: 1400,
            hpCost: 13e3
        }), n.LvUp.set(28, {
            atk: 84,
            atkCost: 17e3,
            def: 860,
            defCost: 14e3,
            hp: 1450,
            hpCost: 14e3
        }), n.LvUp.set(29, {
            atk: 87,
            atkCost: 19e3,
            def: 890,
            defCost: 15e3,
            hp: 1500,
            hpCost: 15e3
        }), n.LvUp.set(30, {atk: 90, atkCost: 21e3, def: 920, defCost: 16e3, hp: 1550, hpCost: 16e3}), cc._RF.pop()
    }, {}],
    MainPromoBtn: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "7de4cOhReNIHJvc9TjH/ytS", "MainPromoBtn"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gameId = "1811140088935749", e
            }

            return __extends(e, t), e.prototype.start = function () {
                var e = this,
                    t = cc.repeatForever(cc.sequence(cc.repeat(cc.sequence(cc.rotateTo(.05, -20), cc.rotateTo(.1, 20), cc.rotateTo(.05, 0)), 3), cc.delayTime(1)));
                this.node.runAction(t), this.node.on("click", function () {
                    e.btnOnClick()
                })
            }, e.prototype.btnOnClick = function () {
                FBInstant.switchGameAsync(this.gameId).catch(function (e) {
                    console.log(e), console.log("fail to switch game!")
                })
            }, __decorate([l()], e.prototype, "gameId", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    MainUIPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d2e7bCt3LNKkqIAbEKdJMLb", "MainUIPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./UIPanelController"), i = e("../charactor/PlayerInfo"), a = e("../Data/LvUp"),
            l = e("../Manager/ItemManager"), s = e("../Manager/GameManager"), r = cc._decorator, c = r.ccclass,
            p = r.property, u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.menuBtn = null, e.allScore = null, e.formerfriendInfo = null, e.curLevel = null, e.armorBar = null, e.hpBar = null, e.maxArmor = null, e.curArmor = null, e.maxHp = null, e.curHp = null, e.attack = null, e.doubleAttack = null, e.defense = null, e.money = null, e.playerInfoBtn = null, e.propBtn = null, e.propListNode = null, e.propDes = null, e.bag = null, e.bagBlack = null, e.bagPanel = null, e.moveNum = null, e.miss = null, e.progressWidth = 830, e
                }

                return __extends(e, t),
                    e.prototype.onLoad = function () {
                        sceneManager.autoResize(1080, 1920);
                    }, e.prototype.start = function () {
                    console.log("this.node.scale",this.node.scale)
                    this.node.scale = sceneManager.getSceneScale();
                    var Bg = uiManager.seekNodeWithName("levelBg", this.node);
                    Bg.scale = 1 / sceneManager.getSceneScale()/sceneManager.getSceneScale();
                    var widget = Bg.addComponent(cc.Widget);
                    widget.isAlignTop = true;
                    widget.top = 0;
                    widget.target = cc.find("Canvas");
                },
                    e.prototype.ResetData = function () {
                    }, e.prototype.InitMainUIPanel = function () {
                    console.log("11", this.node)
                    var cvs = this.node.getComponent(cc.Canvas)

                    if (this.propListNode.childrenCount < 12) for (var e = 0; e < 12 - this.propListNode.childrenCount; e++) {
                        s.default.inst.propPool.GetPropItem(this.propListNode).active = !1
                    } else if (12 < this.propListNode.childrenCount) {
                        console.log("propListNode > 12 ???");
                        for (e = 0; e < this.propListNode.childrenCount - 12; e++) {
                            var t = this.propListNode.children[e];
                            s.default.inst.propPool.PutPropItem(t)
                        }
                    }
                    this.showPlayerInfoBtnRedPoint(), this.RefreshProgressBar(), this.allScore.string = i.PlayerData.curScore.toString(), this.curLevel.string = i.PlayerData.curLevel.toString(), this.InitBaseProperty(), this.RefreshPropList()
                }, e.prototype.InitBaseProperty = function () {
                    this.bag.active = !1, this.doubleAttack.active = i.PlayerData.isCanDoubleDamage;
                    var e = Math.round(s.default.inst.playerInfo.getAttackValue());
                    this.attack.string = e.toString();
                    var t = Math.round(s.default.inst.playerInfo.getDefenceValue());
                    this.defense.string = t.toString(), this.RefreshMoney()
                }, e.prototype.RefreshPropDes = function (e, t) {
                    void 0 === t && (t = ""), this.propDes.node.active = e, this.propDes.string = t
                }, e.prototype.showDoubleAttack = function (e) {
                    this.doubleAttack.active = e
                }, e.prototype.InitGameProgressBar = function () {
                }, e.prototype.onEnable = function () {
                    this.menuBtn.node.on("click", this.ClickMenuBtn, this), this.playerInfoBtn.node.on("click", this.ClickPlayerInfoBtn, this), this.propBtn.node.on("click", this.ClickPropBtn, this)
                }, e.prototype.onDisable = function () {
                    this.menuBtn.node.off("click", this.ClickMenuBtn, this), this.playerInfoBtn.node.off("click", this.ClickPlayerInfoBtn, this), this.propBtn.node.off("click", this.ClickPropBtn, this)
                }, e.prototype.ScrollBegan = function () {
                }, e.prototype.showPlayerInfoBtnRedPoint = function () {
                    a.LvUp.get(i.PlayerData.attackLevel).atkCost <= i.PlayerData.money || a.LvUp.get(i.PlayerData.defenseLevel).defCost <= i.PlayerData.money || a.LvUp.get(i.PlayerData.hpLevel).hpCost <= i.PlayerData.money ? o.default.instance.SetNodeActive(this.playerInfoBtn.node.children[0], !0) : o.default.instance.SetNodeActive(this.playerInfoBtn.node.children[0], !1)
                }, e.prototype.ClickMenuBtn = function (e) {
                    l.ItemManager.inst.getStop() && l.ItemManager.inst.getTouch() && o.default.instance.menuPanel.InitMenuPanel()
                }, e.prototype.ClickPlayerInfoBtn = function (e) {
                    l.ItemManager.inst.getStop() && l.ItemManager.inst.getTouch() && o.default.instance.playerInfoPanel.InitPlayerInfoPanel()
                }, e.prototype.ClickPropBtn = function (e) {
                    this.bag.active = !0, this.PlayOpenBagPanel()
                }, e.prototype.closePropPanel = function () {
                    this.PlayCloseBagPanel()
                }, e.prototype.PlayOpenBagPanel = function () {
                    var e = cc.callFunc(function () {
                    }), t = cc.sequence(cc.moveTo(.6, cc.Vec2.ZERO), e);
                    t.easing(cc.easeInOut(3)), this.bagPanel.runAction(t);
                    var n = cc.fadeTo(.6, 128);
                    this.bagBlack.runAction(n)
                }, e.prototype.PlayCloseBagPanel = function () {
                    var e = this, t = cc.callFunc(function () {
                        e.bag.active = !1
                    }), n = new cc.Vec2(0, -570), o = cc.sequence(cc.moveTo(.6, n), t);
                    o.easing(cc.easeInOut(3)), this.bagPanel.runAction(o);
                    var a = cc.fadeTo(.6, 0);
                    this.bagBlack.runAction(a)
                }, e.prototype.OpenBox = function (e) {
                }, e.prototype.RefreshPropNode = function () {
                }, e.prototype.GetTreasureNodePosition = function (e) {
                    return cc.Vec2.ZERO
                }, e.prototype.RefreshMoney = function () {
                    this.money.string = i.PlayerData.money.toString()
                }, e.prototype.PlayMissAnimation = function (t) {
                    var n = this;
                    void 0 === t && (t = null), this.miss.active = !0;
                    var e = cc.callFunc(function (e) {
                        n.miss.position = new cc.Vec2(65, -660), n.miss.active = !1, null != t && t()
                    }, this), o = new cc.Vec2(5, -600), a = cc.sequence(cc.moveTo(.3, o), e);
                    this.miss.runAction(a)
                }, e.prototype.PlayHPAnimation = function (e, t) {
                    void 0 === t && (t = null);
                    var n = s.default.inst.numPool.CreateItem(this.hpBar, cc.Vec2.ZERO, e), o = cc.callFunc(function (e) {
                        s.default.inst.numPool.PutItem(e), null != t && t()
                    }, this), a = new cc.Vec2(0, 60), l = cc.sequence(cc.spawn(cc.moveTo(.4, a), cc.fadeOut(.8)), o);
                    n.runAction(l), this.curHp.string = i.PlayerData.curHp.toString(), this.maxHp.string = i.PlayerData.maxHp.toString(), this.hpBar.children[0].width = i.PlayerData.curHp / i.PlayerData.maxHp * this.progressWidth
                }, e.prototype.PlayMoneyAnimation = function (e, t) {
                    void 0 === t && (t = null);
                    var n = new cc.Vec2(.5 * this.money.node.width, 20),
                        o = s.default.inst.numPool.CreateItem(this.money.node, n, e), a = cc.callFunc(function (e) {
                            s.default.inst.numPool.PutItem(e), null != t && t()
                        }, this), l = new cc.Vec2(.5 * this.money.node.width, 80),
                        r = cc.sequence(cc.spawn(cc.moveTo(.4, l), cc.fadeOut(.8)), a);
                    o.runAction(r), this.money.string = i.PlayerData.money.toString()
                }, e.prototype.PlayArmorAnimation = function (e, t) {
                    void 0 === t && (t = null);
                    var n = s.default.inst.playerInfo.getArmor(),
                        o = s.default.inst.numPool.CreateItem(this.armorBar, cc.Vec2.ZERO, e), a = cc.callFunc(function () {
                            s.default.inst.numPool.PutItem(o), null != t && t()
                        }), l = new cc.Vec2(0, 60), r = cc.sequence(cc.spawn(cc.moveTo(.4, l), cc.fadeOut(.8)), a);
                    o.runAction(r), this.maxArmor.string = i.PlayerData.maxArmor.toString(), this.curArmor.string = n.toString(), this.armorBar.children[0].width = n / i.PlayerData.maxArmor * this.progressWidth
                }, e.prototype.RefreshProgressBar = function () {
                    var e = s.default.inst.playerInfo.getArmor();
                    this.maxHp.string = i.PlayerData.maxHp.toString(), this.maxArmor.string = i.PlayerData.maxArmor.toString(), this.curArmor.string = e.toString(), this.curHp.string = i.PlayerData.curHp.toString(), this.armorBar.children[0].width = e / i.PlayerData.maxArmor * this.progressWidth, this.hpBar.children[0].width = i.PlayerData.curHp / i.PlayerData.maxHp * this.progressWidth
                }, e.prototype.LevelUpRefresh = function (e) {
                    s.default.inst.showGamePanel(!0), this.InitMainUIPanel()
                }, e.prototype.RefreshPropList = function () {
                    for (var e = Array.from(i.PlayerData.propMap.keys()), t = 0; t < this.propListNode.childrenCount; t++) {
                        var n = this.propListNode.children[t];
                        if (t < i.PlayerData.propMap.size) n.getComponent("PropItem").InitPropItem(e[t]), n.active = !0; else n.active = !1
                    }
                }, e.prototype.PropItemCountDown = function () {
                    for (var e = 0; e < this.propListNode.childrenCount; e++) {
                        this.propListNode.children[e].getComponent("PropItem").CountDown()
                    }
                }, __decorate([p(cc.Button)], e.prototype, "menuBtn", void 0), __decorate([p(cc.Label)], e.prototype, "allScore", void 0), __decorate([p(cc.Sprite)], e.prototype, "formerfriendInfo", void 0), __decorate([p(cc.Label)], e.prototype, "curLevel", void 0), __decorate([p(cc.Node)], e.prototype, "armorBar", void 0), __decorate([p(cc.Node)], e.prototype, "hpBar", void 0), __decorate([p(cc.Label)], e.prototype, "maxArmor", void 0), __decorate([p(cc.Label)], e.prototype, "curArmor", void 0), __decorate([p(cc.Label)], e.prototype, "maxHp", void 0), __decorate([p(cc.Label)], e.prototype, "curHp", void 0), __decorate([p(cc.Label)], e.prototype, "attack", void 0), __decorate([p(cc.Node)], e.prototype, "doubleAttack", void 0), __decorate([p(cc.Label)], e.prototype, "defense", void 0), __decorate([p(cc.Label)], e.prototype, "money", void 0), __decorate([p(cc.Button)], e.prototype, "playerInfoBtn", void 0), __decorate([p(cc.Button)], e.prototype, "propBtn", void 0), __decorate([p(cc.Node)], e.prototype, "propListNode", void 0), __decorate([p(cc.Label)], e.prototype, "propDes", void 0), __decorate([p(cc.Node)], e.prototype, "bag", void 0), __decorate([p(cc.Node)], e.prototype, "bagBlack", void 0), __decorate([p(cc.Node)], e.prototype, "bagPanel", void 0), __decorate([p(cc.Prefab)], e.prototype, "moveNum", void 0), __decorate([p(cc.Node)], e.prototype, "miss", void 0), e = __decorate([c], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../Data/LvUp": "LvUp",
        "../Manager/GameManager": "GameManager",
        "../Manager/ItemManager": "ItemManager",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./UIPanelController": "UIPanelController"
    }],
    MenuPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "4d9c1Wryz9MX70dfnaZ2M5p", "MenuPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./UIPanelController"), a = e("../Manager/GameManager"), l = cc._decorator, r = l.ccclass,
            i = l.property, s = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.returnGameBtn = null, e.returnBtn = null, e.restartBtn = null, e.audioBtn = null, e.off = null, e.on = null, e.menuPanel = null, e.panel = null, e.black = null, e
                }

                return __extends(e, t), e.prototype.onEnable = function () {
                    this.RegisterBtnEvent()
                }, e.prototype.onDisable = function () {
                    this.RemoveBtnEvent()
                }, e.prototype.InitMenuPanel = function () {
                    this.menuPanel.active = !0, this.showMenuPanel()
                }, e.prototype.hideMenuPanel = function () {
                    var e = this, t = cc.callFunc(function () {
                        e.menuPanel.active = !1
                    }), n = new cc.Vec2(0, 1920), o = cc.sequence(cc.moveTo(.6, n), t);
                    o.easing(cc.easeInOut(3)), this.panel.runAction(o);
                    var a = cc.fadeTo(.6, 0);
                    this.black.runAction(a)
                }, e.prototype.showMenuPanel = function () {
                    var e = cc.callFunc(function () {
                    }), t = cc.sequence(cc.moveTo(.6, cc.Vec2.ZERO), e);
                    t.easing(cc.easeInOut(3)), this.panel.runAction(t);
                    var n = cc.fadeTo(.6, 128);
                    this.black.runAction(n)
                }, e.prototype.ClickRetrunGameBtn = function () {
                    this.hideMenuPanel()
                }, e.prototype.ClickReturnMainPanelBtn = function () {
                    this.hideMenuPanel()
                }, e.prototype.ClickRestartBtn = function () {
                    o.default.instance.ClickRestart(), this.menuPanel.active = !1
                }, e.prototype.ClickAudioBtn = function () {
                    a.default.inst.audioManager.getAudioIsOpen() ? (this.audioBtn.node.getComponent(cc.Sprite).spriteFrame = this.off, a.default.inst.audioManager.closeAudio()) : (this.audioBtn.node.getComponent(cc.Sprite).spriteFrame = this.on, a.default.inst.audioManager.openAudio())
                }, e.prototype.RegisterBtnEvent = function () {
                    this.returnGameBtn.node.on("click", this.ClickRetrunGameBtn, this), this.returnBtn.node.on("click", this.ClickReturnMainPanelBtn, this), this.restartBtn.node.on("click", this.ClickRestartBtn, this)
                }, e.prototype.RemoveBtnEvent = function () {
                    this.returnGameBtn.node.off("click", this.ClickRetrunGameBtn, this), this.returnBtn.node.off("click", this.ClickReturnMainPanelBtn, this), this.restartBtn.node.off("click", this.ClickRestartBtn, this)
                }, __decorate([i(cc.Button)], e.prototype, "returnGameBtn", void 0), __decorate([i(cc.Button)], e.prototype, "returnBtn", void 0), __decorate([i(cc.Button)], e.prototype, "restartBtn", void 0), __decorate([i(cc.Button)], e.prototype, "audioBtn", void 0), __decorate([i(cc.SpriteFrame)], e.prototype, "off", void 0), __decorate([i(cc.SpriteFrame)], e.prototype, "on", void 0), __decorate([i(cc.Node)], e.prototype, "menuPanel", void 0), __decorate([i(cc.Node)], e.prototype, "panel", void 0), __decorate([i(cc.Node)], e.prototype, "black", void 0), e = __decorate([r], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {"../Manager/GameManager": "GameManager", "./UIPanelController": "UIPanelController"}],
    MonsterAttackPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3b717k8dW5Pg5gIX/8mocXD", "MonsterAttackPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.atkPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                null == this.atkPoolList && (this.atkPoolList = new cc.NodePool);
                for (var e = 0; e < 5; ++e) {
                    var t = cc.instantiate(this.atkPrefab);
                    this.atkPoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t, n) {
                var o = null;
                return (o = 0 < this.atkPoolList.size() ? this.atkPoolList.get() : cc.instantiate(this.atkPrefab)).parent = e, o.position = t, o.children[0].getComponent(cc.Sprite).spriteFrame = n, o
            }, e.prototype.PutItem = function (e) {
                this.atkPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.atkPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "atkPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    MonsterDeadPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "084caXXCZlBfbspF393AlWt", "MonsterDeadPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.monsterDeadPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                null == this.monsterDeadPoolList && (this.monsterDeadPoolList = new cc.NodePool);
                for (var e = 0; e < 2; ++e) {
                    var t = cc.instantiate(this.monsterDeadPrefab);
                    this.monsterDeadPoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t) {
                var n = null;
                return (n = 0 < this.monsterDeadPoolList.size() ? this.monsterDeadPoolList.get() : cc.instantiate(this.monsterDeadPrefab)).parent = e, n.position = t, n
            }, e.prototype.PutItem = function (e) {
                e.opacity = 255, this.monsterDeadPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.monsterDeadPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "monsterDeadPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    MonsterInfo: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "f0c3cAdrR1KGIIHl11v3J9B", "MonsterInfo"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./ItemInfo"), a = cc._decorator, l = a.ccclass, r = (a.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return __extends(t, e), t = __decorate([l], t)
        }(o.default));
        n.default = r, cc._RF.pop()
    }, {"./ItemInfo": "ItemInfo"}],
    MoreBtn: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "dc1b6OERKJHLJuwQdxzlS7r", "MoreBtn"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../../MoreGame/Script/UI/MoreView"), a = cc._decorator, l = a.ccclass,
            r = (a.property, function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return __extends(t, e), t.prototype.start = function () {
                    var e = this;
                    this.node.on("click", function () {
                        e.onClick()
                    })
                }, t.prototype.onClick = function () {
                    // o.default.inst.show();
                    // FBInstant.logEvent("open_more")
                }, t = __decorate([l], t)
            }(cc.Component));
        n.default = r, cc._RF.pop()
    }, {"../../MoreGame/Script/UI/MoreView": "MoreView"}],
    MoreView: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "72e80dYio1KqKcqFxX0L4Ew", "MoreView"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.closeBtn = null, e
            }

            return __extends(e, t), (n = e).prototype.start = function () {
                var e = this;
                (n.inst = this).closeBtn.node.on("click", function () {
                    e.closeBtnOnClick()
                }), this.node.active = !1
            }, e.prototype.show = function () {
                this.node.active = !0
            }, e.prototype.closeBtnOnClick = function () {
                this.node.active = !1
            }, __decorate([l(cc.Button)], e.prototype, "closeBtn", void 0), e = n = __decorate([a], e);
            var n
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    NumPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "2ccf34rJHNJqZ4HpA7YPbPO", "NumPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.numPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                null == this.numPoolList && (this.numPoolList = new cc.NodePool);
                for (var e = 0; e < 3; ++e) {
                    var t = cc.instantiate(this.numPrefab);
                    this.numPoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t, n, o) {
                void 0 === o && (o = !1);
                var a = null;
                (a = 0 < this.numPoolList.size() ? this.numPoolList.get() : cc.instantiate(this.numPrefab)).parent = e, a.position = t, a.getChildByName("violent").active = o;
                var l = a.getChildByName("num");
                return 0 < n ? (l.children[0].active = !0, l.children[1].active = !1) : 0 == n ? (l.children[0].active = !1, l.children[1].active = !1) : (l.children[0].active = !1, l.children[1].active = !0), l.children[2].getComponent(cc.Label).string = Math.abs(n).toString(), a
            }, e.prototype.PutItem = function (e) {
                e.opacity = 255, this.numPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.numPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "numPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    PersistentManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ce0b7pJPYpJuJMhWmi5FZ1Y", "PersistentManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var A = e("./PlatformFactory"), h = e("../Manager/GameManager"), m = e("../charactor/PlayerInfo"),
            o = e("./Facebook"), a = function () {
                function e() {
                    this.reviveNum = null, this.money = null, this.extraAttackValue = null, this.attackLevel = null, this.defenseLevel = null, this.hpLevel = null, this.curArmor = null, this.curHp = null, this.curScore = null, this.completeLevelList = null, this.curskills = null, this.propMap = null, this.isFirst = null
                }

                return Object.defineProperty(e, "inst", {
                    get: function () {
                        return null == this._inst && (this._inst = new e), this._inst
                    }, enumerable: !0, configurable: !0
                }), e.prototype.init = function (n) {
                    var o = this;
                    A.default.inst.currentPlatform.getPlayerInfo(function (e) {
                        o.isFirst = e.isFirst, o.reviveNum = e.reviveNum, o.money = e.money, o.extraAttackValue = e.extraAttackValue, o.attackLevel = e.attackLevel, o.defenseLevel = e.defenseLevel, o.hpLevel = e.hpLevel, o.curArmor = e.curArmor, o.curHp = e.curHp, o.curScore = e.curScore, o.completeLevelList = e.completeLevelList, o.curskills = e.curskills, o.propMap = e.propMap;
                        var t = o.decodeMap(o.propMap);
                        h.default.inst.playerInfo.InitData(o.isFirst, o.reviveNum, o.money, o.extraAttackValue, o.attackLevel, o.defenseLevel, o.hpLevel, o.curArmor, o.curHp, o.curScore, o.completeLevelList, o.curskills, t), n()
                    })
                }, e.prototype.save = function (e) {
                    void 0 === e && (e = !1);
                    var t = e ? 0 : m.PlayerData.reviveNum, n = e ? 0 : m.PlayerData.money,
                        o = e ? 0 : m.PlayerData.extraAttackValue, a = e ? 1 : m.PlayerData.attackLevel,
                        l = e ? 1 : m.PlayerData.defenseLevel, r = e ? 1 : m.PlayerData.hpLevel,
                        i = e ? 50 : m.PlayerData.curArmor, s = e ? 100 : m.PlayerData.curHp,
                        c = e ? 0 : m.PlayerData.curScore, p = e ? [] : m.PlayerData.completeLevelList,
                        u = e ? [] : m.PlayerData.curskills, d = e ? new Map : m.PlayerData.propMap;
                    e && h.default.inst.playerInfo.InitData(!1, t, n, o, a, l, r, i, s, c, p, u, d);
                    var v = this.encodeMap(d);
                    A.default.inst.currentPlatform.save(!1, t, n, o, a, l, r, i, s, c, p, u, v)
                }, e.prototype.saveIsFirst = function (e) {
                    o.default.inst.saveIsFirst(e)
                }, e.prototype.saveReviveNum = function (e) {
                    o.default.inst.saveReviveNum(e)
                }, e.prototype.savePropMap = function (e) {
                    var t = this.encodeMap(e);
                    o.default.inst.savePropMap(t)
                }, e.prototype.encodeMap = function (e) {
                    var t = "";
                    if (null != e && 0 < e.size) {
                        for (var n = Array.from(e.keys()), o = Array.from(e.values()), a = 0; a < e.size; a++) t += n[a].toString() + ":" + o[a].toString() + ",";
                        t = t.substring(0, t.length - 1)
                    }
                    return t
                }, e.prototype.decodeMap = function (e) {
                    var t = new Map;
                    if (null != e && 0 < e.length) for (var n = e.split(","), o = 0; o < n.length; o++) {
                        var a = n[o].split(":"), l = parseInt(a[0]), r = parseInt(a[1]);
                        t.set(l, r)
                    }
                    return t
                }, e.prototype.challengeFriend = function (e, t) {
                    void 0 === e && (e = function () {
                    }), void 0 === t && (t = function () {
                    }), A.default.inst.currentPlatform.challengeFriend(e, t)
                }, e._inst = null, e
            }();
        n.default = a, cc._RF.pop()
    }, {
        "../Manager/GameManager": "GameManager",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./Facebook": "Facebook",
        "./PlatformFactory": "PlatformFactory"
    }],
    PlatformFactory: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "1032d1yiYBGLYsTzcUJypwV", "PlatformFactory"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./BasePlatform"), a = e("./Facebook"), l = function () {
            function e() {
                this.currentPlatform = null, "undefined" != typeof FBInstant ? this.currentPlatform = a.default.inst : this.currentPlatform = o.default.inst;
                this.currentPlatform = a.default.inst
            }

            return Object.defineProperty(e, "inst", {
                get: function () {
                    return null == this._inst ? new e : this._inst
                }, enumerable: !0, configurable: !0
            }), e._inst = null, e
        }();
        n.default = l, cc._RF.pop()
    }, {"./BasePlatform": "BasePlatform", "./Facebook": "Facebook"}],
    PlayBtn: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9011907ThxKzpQ7vSlYQggr", "PlayBtn"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gameId = "1811140088935749", e
            }

            return __extends(e, t), e.prototype.start = function () {
                var e = this;
                this.node.on("click", function () {
                    e.btnOnClick()
                })
            }, e.prototype.btnOnClick = function () {
                FBInstant.switchGameAsync(this.gameId).catch(function (e) {
                    console.log(e), console.log("fail to switch game!")
                })
            }, __decorate([l()], e.prototype, "gameId", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    PlayerInfoPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0448aHCRdhKU7SWHt5gSDwT", "PlayerInfoPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var r = e("../charactor/PlayerInfo"), o = e("../Data/LvUp"), a = e("./UIPanelController"),
            i = e("../Data/Skill"), s = e("../Data/SkillInfo"), c = e("../Manager/GameManager"), l = cc._decorator,
            p = l.ccclass, u = l.property, d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.palyerInfoPanel = null, e.colseBtn = null, e.skillItems = [], e.tips = null, e.maxLevelIcon = null, e.normalLevelIcon = null, e.curAttackValue = null, e.nextAttackValue = null, e.attackUpMoney = null, e.attackUpBtn = null, e.attackGoldIcon = null, e.attackLevelMax = null, e.curDefenseValue = null, e.nextDefenseValue = null, e.defenseUpMoney = null, e.defenseUpBtn = null, e.defenseGoldIcon = null, e.defenceLevelMax = null, e.curHpValue = null, e.nextHpValue = null, e.hpUpMoney = null, e.hpUpBtn = null, e.hpGoldIcon = null, e.hpLevelMax = null, e.panel = null, e.black = null, e
                }

                return __extends(e, t), e.prototype.hideMenuPanel = function () {
                    console.log("333",this.node)
                    var e = this, t = cc.callFunc(function () {
                        e.palyerInfoPanel.active = !1
                    }), n = new cc.Vec2(0, 1920), o = cc.sequence(cc.moveTo(.6, n), t);
                    o.easing(cc.easeInOut(3)), this.panel.runAction(o);
                    var a = cc.fadeTo(.6, 0);
                    this.black.runAction(a)
                }, e.prototype.showMenuPanel = function () {
                    var e = cc.callFunc(function () {
                    }), t = cc.sequence(cc.moveTo(.6, cc.Vec2.ZERO), e);
                    t.easing(cc.easeInOut(3)), this.panel.runAction(t);
                    var n = cc.fadeTo(.6, 128);
                    this.black.runAction(n)
                }, e.prototype.InitPlayerInfoPanel = function () {
                    this.RefreshSkillItem(), this.RefreshAttackLvUpItem(), this.RefreshDefenseLvUpItem(), this.RefreshHpLvUpItem(), this.refreshLvUpBtn(), this.palyerInfoPanel.active = !0, this.showMenuPanel()
                }, e.prototype.RefreshSkillItem = function () {
                    for (var e = r.PlayerData.curskills.length, t = 0; t < this.skillItems.length; t++) {
                        this.skillItems[t];
                        if (t < e) {
                            var n = r.PlayerData.curskills[t], o = i.Skill.get(n).skillType,
                                a = s.SkillInfo.get(o).skillIcon, l = c.default.inst.icons.skillIcons[a];
                            this.skillItems[t].getComponent("SkillItem").InitItem(n, l), this.skillItems[t].active = !0
                        } else this.skillItems[t].active = !1
                    }
                }, e.prototype.RefreshAttackLvUpItem = function () {
                    r.PlayerData.attackLevel >= o.LvUp.size ? (this.attackGoldIcon.active = !1, this.attackUpMoney.node.active = !1, this.attackUpBtn.normalSprite = this.maxLevelIcon, this.attackLevelMax.active = !0, this.curAttackValue.string = o.LvUp.get(o.LvUp.size).atk.toString(), this.nextAttackValue.string = o.LvUp.get(o.LvUp.size).atk.toString(), this.attackUpBtn.enabled = !1) : o.LvUp.has(r.PlayerData.attackLevel) && (this.attackGoldIcon.active = !0, this.attackUpMoney.node.active = !0, this.attackUpBtn.normalSprite = this.normalLevelIcon, this.attackLevelMax.active = !1, this.attackUpMoney.string = o.LvUp.get(r.PlayerData.attackLevel).atkCost.toString(), this.curAttackValue.string = o.LvUp.get(r.PlayerData.attackLevel).atk.toString(), this.nextAttackValue.string = o.LvUp.get(r.PlayerData.attackLevel + 1).atk.toString(), this.refreshLvUpBtn())
                }, e.prototype.RefreshDefenseLvUpItem = function () {
                    r.PlayerData.defenseLevel >= o.LvUp.size ? (this.defenseGoldIcon.active = !1, this.defenseUpMoney.node.active = !1, this.defenseUpBtn.normalSprite = this.maxLevelIcon, this.defenceLevelMax.active = !0, this.curDefenseValue.string = o.LvUp.get(o.LvUp.size).def.toString(), this.nextDefenseValue.string = o.LvUp.get(o.LvUp.size).def.toString(), this.defenseUpBtn.enabled = !1) : o.LvUp.has(r.PlayerData.defenseLevel) && (this.defenseGoldIcon.active = !0, this.defenseUpMoney.node.active = !0, this.defenseUpBtn.normalSprite = this.normalLevelIcon, this.defenceLevelMax.active = !1, this.defenseUpMoney.string = o.LvUp.get(r.PlayerData.defenseLevel).defCost.toString(), this.curDefenseValue.string = o.LvUp.get(r.PlayerData.defenseLevel).def.toString(), this.nextDefenseValue.string = o.LvUp.get(r.PlayerData.defenseLevel + 1).def.toString(), this.refreshLvUpBtn())
                }, e.prototype.RefreshHpLvUpItem = function () {
                    r.PlayerData.hpLevel >= o.LvUp.size ? (this.hpGoldIcon.active = !1, this.hpUpMoney.node.active = !1, this.hpUpBtn.normalSprite = this.maxLevelIcon, this.hpLevelMax.active = !0, this.curHpValue.string = o.LvUp.get(o.LvUp.size).hp.toString(), this.nextHpValue.string = o.LvUp.get(o.LvUp.size).hp.toString(), this.hpUpBtn.enabled = !1) : o.LvUp.has(r.PlayerData.hpLevel) && (this.hpGoldIcon.active = !0, this.hpUpMoney.node.active = !0, this.hpUpBtn.normalSprite = this.normalLevelIcon, this.hpLevelMax.active = !1, this.hpUpMoney.string = o.LvUp.get(r.PlayerData.hpLevel).hpCost.toString(), this.curHpValue.string = o.LvUp.get(r.PlayerData.hpLevel).hp.toString(), this.nextHpValue.string = o.LvUp.get(r.PlayerData.hpLevel + 1).hp.toString(), this.refreshLvUpBtn())
                }, e.prototype.refreshLvUpBtn = function () {
                    this.attackUpBtn.interactable = !(o.LvUp.get(r.PlayerData.attackLevel).atkCost > r.PlayerData.money), this.defenseUpBtn.interactable = !(o.LvUp.get(r.PlayerData.defenseLevel).defCost > r.PlayerData.money), this.hpUpBtn.interactable = !(o.LvUp.get(r.PlayerData.hpLevel).hpCost > r.PlayerData.money)
                }, e.prototype.onEnable = function () {
                    this.colseBtn.node.on("click", this.ClickClose, this), this.attackUpBtn.node.on("click", this.ClickAttackLvUp, this), this.defenseUpBtn.node.on("click", this.ClickDefenseLvUp, this), this.hpUpBtn.node.on("click", this.ClickHpLvUp, this)
                }, e.prototype.onDisable = function () {
                    this.colseBtn.node.off("click", this.ClickClose, this), this.attackUpBtn.node.off("click", this.ClickAttackLvUp, this), this.defenseUpBtn.node.off("click", this.ClickDefenseLvUp, this), this.hpUpBtn.node.off("click", this.ClickHpLvUp, this)
                }, e.prototype.ClickAttackLvUp = function () {
                    var e = o.LvUp.get(r.PlayerData.attackLevel).atkCost;
                    r.PlayerData.money >= e && (c.default.inst.playerInfo.ChangeAttackLevel(), c.default.inst.playerInfo.ChangeMoney(-e), this.RefreshAttackLvUpItem(), c.default.inst.levelPanel.node.active && c.default.inst.levelPanel.refreshPlayerInfo())
                }, e.prototype.ClickDefenseLvUp = function () {
                    var e = o.LvUp.get(r.PlayerData.defenseLevel).defCost;
                    r.PlayerData.money >= e && (c.default.inst.playerInfo.ChangeDefenceLevel(), c.default.inst.playerInfo.ChangeMoney(-e), this.RefreshDefenseLvUpItem(), c.default.inst.levelPanel.node.active && c.default.inst.levelPanel.refreshPlayerInfo())
                }, e.prototype.ClickHpLvUp = function () {
                    var e = o.LvUp.get(r.PlayerData.hpLevel).hpCost;
                    if (r.PlayerData.money >= e) {
                        var t = o.LvUp.get(r.PlayerData.hpLevel).hp;
                        r.PlayerData.hpLevel++, c.default.inst.playerInfo.ChangeMoney(-e), r.PlayerData.maxHp = o.LvUp.get(r.PlayerData.hpLevel).hp, r.PlayerData.curHp += r.PlayerData.maxHp - t, this.RefreshHpLvUpItem(), c.default.inst.levelPanel.node.active && c.default.inst.levelPanel.refreshPlayerInfo()
                    }
                }, e.prototype.ClickClose = function () {
                    null != a.default.instance && (a.default.instance.mainUIPanel.RefreshProgressBar(), a.default.instance.mainUIPanel.InitBaseProperty()), this.hideMenuPanel()
                }, __decorate([u(cc.Node)], e.prototype, "palyerInfoPanel", void 0), __decorate([u(cc.Button)], e.prototype, "colseBtn", void 0), __decorate([u([cc.Node])], e.prototype, "skillItems", void 0), __decorate([u(cc.Label)], e.prototype, "tips", void 0), __decorate([u(cc.SpriteFrame)], e.prototype, "maxLevelIcon", void 0), __decorate([u(cc.SpriteFrame)], e.prototype, "normalLevelIcon", void 0), __decorate([u(cc.Label)], e.prototype, "curAttackValue", void 0), __decorate([u(cc.Label)], e.prototype, "nextAttackValue", void 0), __decorate([u(cc.Label)], e.prototype, "attackUpMoney", void 0), __decorate([u(cc.Button)], e.prototype, "attackUpBtn", void 0), __decorate([u(cc.Node)], e.prototype, "attackGoldIcon", void 0), __decorate([u(cc.Node)], e.prototype, "attackLevelMax", void 0), __decorate([u(cc.Label)], e.prototype, "curDefenseValue", void 0), __decorate([u(cc.Label)], e.prototype, "nextDefenseValue", void 0), __decorate([u(cc.Label)], e.prototype, "defenseUpMoney", void 0), __decorate([u(cc.Button)], e.prototype, "defenseUpBtn", void 0), __decorate([u(cc.Node)], e.prototype, "defenseGoldIcon", void 0), __decorate([u(cc.Node)], e.prototype, "defenceLevelMax", void 0), __decorate([u(cc.Label)], e.prototype, "curHpValue", void 0), __decorate([u(cc.Label)], e.prototype, "nextHpValue", void 0), __decorate([u(cc.Label)], e.prototype, "hpUpMoney", void 0), __decorate([u(cc.Button)], e.prototype, "hpUpBtn", void 0), __decorate([u(cc.Node)], e.prototype, "hpGoldIcon", void 0), __decorate([u(cc.Node)], e.prototype, "hpLevelMax", void 0), __decorate([u(cc.Node)], e.prototype, "panel", void 0), __decorate([u(cc.Node)], e.prototype, "black", void 0), e = __decorate([p], e)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../Data/LvUp": "LvUp",
        "../Data/Skill": "Skill",
        "../Data/SkillInfo": "SkillInfo",
        "../Manager/GameManager": "GameManager",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./UIPanelController": "UIPanelController"
    }],
    PlayerInfo: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "58601WAGxlDtK183TI/o//F", "PlayerInfo"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../UI/UIPanelController"), v = e("../Data/LvUp"), a = e("../Manager/GameManager"),
            A = e("../Eume/LevelType "), l = cc._decorator, r = l.ccclass, i = (l.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.attackParam = 1, e.defenceParam = 1, e
                }

                return __extends(e, t), e.prototype.InitData = function (e, t, n, o, a, l, r, i, s, c, p, u, d) {
                    h.reviveNum = t, h.money = n, h.extraAttackValue = o, h.attackLevel = a, h.defenseLevel = l, h.hpLevel = r, h.curArmor = i, h.curHp = s, h.curScore = c, h.defenseValue = 1, h.attackValue = v.LvUp.get(h.attackLevel).atk, h.maxArmor = v.LvUp.get(h.defenseLevel).def, h.maxHp = v.LvUp.get(h.hpLevel).hp, h.curLevel = 1, h.curLevelType = A.LevelType.normal, h.completeLevelList = p, h.curskills = u, h.isCanDoubleDamage = !1, h.isFirst = e, h.propMap = d,
                        console.log("初始化数据")
                }, e.prototype.pushCompleteLevel = function (e) {
                    -1 == h.completeLevelList.indexOf(e) && h.completeLevelList.push(e)
                }, e.prototype.clearCompleteLevelList = function () {
                    h.completeLevelList = []
                }, e.prototype.setCurLevel = function (e, t) {
                    0 < e && (h.curLevel = e, t > A.LevelType.boss ? h.curLevelType = A.LevelType.boss : h.curLevelType = t)
                }, e.prototype.SetActtackParam = function (e) {
                    0 < e ? this.attackParam *= e : this.attackParam /= Math.abs(e), o.default.instance.mainUIPanel.InitBaseProperty()
                }, e.prototype.getAttackValue = function () {
                    var e = (h.attackValue + h.extraAttackValue) * this.attackParam;
                    return Math.max(1, e)
                }, e.prototype.SetDefenceParam = function (e) {
                    0 < e ? this.defenceParam *= e : this.defenceParam /= Math.abs(e), o.default.instance.mainUIPanel.InitBaseProperty()
                }, e.prototype.getDefenceValue = function () {
                    var e = h.defenseValue * this.defenceParam;
                    return Math.max(1, e)
                }, e.prototype.ChangeExtraAtk = function (e) {
                    h.extraAttackValue += e
                }, e.prototype.ChangeMoney = function (e, t) {
                    void 0 === t && (t = null), h.money += e, h.money < 0 && (h.money = 0), a.default.inst.levelPanel.node.active ? a.default.inst.levelPanel.refreshPlayerMoney() : (o.default.instance.mainUIPanel.PlayMoneyAnimation(e, t), o.default.instance.mainUIPanel.showPlayerInfoBtnRedPoint())
                }, e.prototype.ChangeHp = function (e, t) {
                    void 0 === t && (t = null), h.curHp += e, h.curHp > h.maxHp && (h.curHp = h.maxHp), h.curHp < 0 && (h.curHp = 0), a.default.inst.levelPanel.node.active ? (0 == h.curHp && (a.default.inst.gameOverPanel.node.active || a.default.inst.showGameOverPanel(!0)), a.default.inst.levelPanel.refreshPlayerHp()) : o.default.instance.mainUIPanel.PlayHPAnimation(e, function () {
                        0 < h.curHp ? null != t && t() : a.default.inst.gameOverPanel.node.active || a.default.inst.showGameOverPanel(!0)
                    })
                }, e.prototype.ChangeArmor = function (e, t) {
                    void 0 === t && (t = null);
                    var n = h.curArmor + e;
                    n > h.maxArmor ? (n = e - n + h.maxArmor, h.curArmor = h.maxArmor) : n < 0 ? (n = -h.maxArmor, h.curArmor = 0) : (n = e, h.curArmor += e), a.default.inst.levelPanel.node.active ? a.default.inst.levelPanel.refreshPlayerArmor() : o.default.instance.mainUIPanel.PlayArmorAnimation(e, t)
                }, e.prototype.getArmor = function () {
                    return h.curArmor
                }, e.prototype.ChangeAttackLevel = function () {
                    h.attackLevel++, h.attackValue = v.LvUp.get(h.attackLevel).atk, null != o.default.instance && a.default.inst.gamePanel.active && o.default.instance.mainUIPanel.InitBaseProperty()
                }, e.prototype.ChangeDefenceLevel = function () {
                    var e = v.LvUp.get(h.defenseLevel).def;
                    h.defenseLevel++, h.maxArmor = v.LvUp.get(h.defenseLevel).def, h.curArmor += h.maxArmor - e, null != o.default.instance && a.default.inst.gamePanel.active && o.default.instance.mainUIPanel.InitBaseProperty()
                }, e.prototype.ChangeReviveNum = function () {
                    0 == h.reviveNum && h.reviveNum++
                }, e = __decorate([r], e)
            }(cc.Component));
        n.default = i;
        var h = function () {
        };
        n.PlayerData = h, cc._RF.pop()
    }, {
        "../Data/LvUp": "LvUp",
        "../Eume/LevelType ": "LevelType ",
        "../Manager/GameManager": "GameManager",
        "../UI/UIPanelController": "UIPanelController"
    }],
    PlayerPropertyType: [function (e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "182f3RXRc5Eb4719bYCi1Qq", "PlayerPropertyType"), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.PlayerPropertyType || (n.PlayerPropertyType = {}))[o.ATK = 1] = "ATK", o[o.DEF = 2] = "DEF", o[o.HP = 3] = "HP", o[o.GOLD = 4] = "GOLD", o[o.perATK = 11] = "perATK", o[o.perDEF = 12] = "perDEF", o[o.perHP = 13] = "perHP", o[o.perGOLD = 14] = "perGOLD", cc._RF.pop()
    }, {}],
    PlayerSkillType: [function (e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "f075fzUlWBLP6hKsTDR5huU", "PlayerSkillType"), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.PlayerSkillType || (n.PlayerSkillType = {}))[o.Heal = 1] = "Heal", o[o.Greedy = 2] = "Greedy", o[o.ViolentAttack = 3] = "ViolentAttack", o[o.Dodge = 4] = "Dodge", o[o.CastArmour = 5] = "CastArmour", o[o.ExtraGold = 6] = "ExtraGold", o[o.AdvancedTreatment = 7] = "AdvancedTreatment", o[o.DoubleArmor = 8] = "DoubleArmor", o[o.AgnailArmor = 9] = "AgnailArmor", cc._RF.pop()
    }, {}],
    PrizeItem: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ddfb7L+NPtGwZHv7ckZH79U", "PrizeItem"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./UIPanelController"), a = e("../Manager/GameManager"), l = cc._decorator, r = l.ccclass,
            i = l.property, s = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.sprite = null, e
                }

                return __extends(e, t), e.prototype.InitItem = function (e, t, n) {
                    this.itemId = e, this.index = n, this.sprite.spriteFrame = t, 0 == n ? (this.node.scale = 1.2, this.node.children[0].scale = 1) : (this.node.scale = 1, this.node.children[0].scale = 0), this.node.on("click", this.BeSelected, this)
                }, e.prototype.BeSelected = function () {
                    a.default.inst.levelPanel.node.active ? a.default.inst.levelPanel.treasurePanel.ChangeCurSelectItem(this.itemId, this.index) : o.default.instance.treasureBoxPrizePanel.ChangeCurSelectItem(this.itemId, this.index)
                }, __decorate([i(cc.Sprite)], e.prototype, "sprite", void 0), e = __decorate([r], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {"../Manager/GameManager": "GameManager", "./UIPanelController": "UIPanelController"}],
    PropItem: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "c6d314qrW1J9Iv5rvhrayvH", "PropItem"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./UIPanelController"), a = e("../Data/Item"), l = e("../charactor/PlayerInfo"),
            r = e("../Manager/GameManager"), i = e("../Manager/ItemManager"), s = e("../Platform/PersistentManager"),
            c = cc._decorator, p = c.ccclass, u = c.property, d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.propCount = null, e.des = null, e.propId = -1, e.timer = 0, e.propDes = null, e.isClick = !1, e.isPress = !1, e.isCountDown = !1, e
                }

                return __extends(e, t), e.prototype.InitPropItem = function (e) {
                    var t = r.default.inst.icons.propIcons[a.Item.get(e).res];
                    this.node.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t, this.propId = e, this.propDes = a.Item.get(e).des, this.RefeshPropCount(), this.ScrollBegan()
                }, e.prototype.RefeshPropCount = function () {
                    var e = l.PlayerData.propMap.get(this.propId);
                    this.propCount.string = e.toString()
                }, e.prototype.onEnable = function () {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.StartTouch, this), this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchCancel, this)
                }, e.prototype.onDisable = function () {
                    this.node.off(cc.Node.EventType.TOUCH_START, this.StartTouch, this), this.node.off(cc.Node.EventType.TOUCH_END, this.TouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.TouchCancel, this)
                }, e.prototype.StartTouch = function () {
                    this.timer = 0, this.isClick = !0
                }, e.prototype.TouchEnd = function () {
                    this.timer = 0, this.isPress ? (this.isPress = !1, r.default.inst.levelPanel.node.active ? r.default.inst.levelPanel.RefreshPropDes(!1) : o.default.instance.mainUIPanel.RefreshPropDes(!1)) : this.UseProp()
                }, e.prototype.TouchCancel = function () {
                    this.timer = 0, this.isClick = !1, this.isPress = !1, r.default.inst.levelPanel.node.active ? r.default.inst.levelPanel.RefreshPropDes(!1) : o.default.instance.mainUIPanel.RefreshPropDes(!1)
                }, e.prototype.CountDown = function () {
                    var e = this;
                    this.isCountDown = !0;
                    var t = this.node.getChildByName("black");
                    t.active = !0;
                    var n = 0, o = setInterval(function () {
                        20 == n && (e.isCountDown = !1, t.getComponent(cc.Sprite).fillRange = 0, t.active = !1, clearInterval(o)), t.getComponent(cc.Sprite).fillRange += .05, n++
                    }, 50)
                }, e.prototype.UseProp = function () {
                    var e = this;
                    this.isClick = !1, this.isCountDown || (r.default.inst.levelPanel.node.active ? r.default.inst.propManager.UseProp(this.propId, function () {
                        10001 != e.propId && 10002 != e.propId || (r.default.inst.levelPanel.PropItemCountDown(), s.default.inst.savePropMap(l.PlayerData.propMap))
                    }) : i.ItemManager.inst.getStop() && i.ItemManager.inst.getTouch() && r.default.inst.propManager.UseProp(this.propId, function () {
                        r.default.inst.uiPanelController.mainUIPanel.PropItemCountDown()
                    }))
                }, e.prototype.update = function (e) {
                    i.ItemManager.inst.getStop() && i.ItemManager.inst.getTouch() && this.isClick && !this.isCountDown && (this.timer += e, .3 < this.timer && (this.isPress = !0, this.isClick = !1, r.default.inst.levelPanel.node.active ? r.default.inst.levelPanel.RefreshPropDes(!0, this.propDes) : o.default.instance.mainUIPanel.RefreshPropDes(!0, this.propDes)))
                }, e.prototype.ScrollBegan = function () {
                    this.isClick = !1, this.isPress = !1, this.timer = 0
                }, __decorate([u(cc.Label)], e.prototype, "propCount", void 0), __decorate([u(cc.Label)], e.prototype, "des", void 0), e = __decorate([p], e)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../Data/Item": "Item",
        "../Manager/GameManager": "GameManager",
        "../Manager/ItemManager": "ItemManager",
        "../Platform/PersistentManager": "PersistentManager",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./UIPanelController": "UIPanelController"
    }],
    PropManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "b8ff1Oyah9GLLH29kvcNOWS", "PropManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../charactor/PlayerInfo"), a = e("../UI/UIPanelController"), l = e("../Eume/PropType"),
            r = e("./GameManager"), i = e("../Data/Item"), s = e("../Eume/ItemType"),
            c = e("../Platform/PersistentManager"), p = cc._decorator, u = p.ccclass, d = (p.property, function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return __extends(t, e), t.prototype.AddProp = function (e, t) {
                    if (o.PlayerData.propMap.has(e)) {
                        var n = o.PlayerData.propMap.get(e);
                        n += t, o.PlayerData.propMap.set(e, n)
                    } else o.PlayerData.propMap.set(e, 1);
                    r.default.inst.levelPanel.node.active ? (c.default.inst.savePropMap(o.PlayerData.propMap), r.default.inst.levelPanel.RefreshPropList()) : a.default.instance.mainUIPanel.RefreshPropList()
                }, t.prototype.UseProp = function (e, t) {
                    if (o.PlayerData.propMap.has(e)) if (this.checkProp(e)) {
                        var n = o.PlayerData.propMap.get(e);
                        --n <= 0 ? o.PlayerData.propMap.delete(e) : o.PlayerData.propMap.set(e, n), r.default.inst.levelPanel.node.active ? r.default.inst.levelPanel.RefreshPropList() : a.default.instance.mainUIPanel.RefreshPropList(), this.DoUseProp(e), null != t && t()
                    } else console.log("check失败，无法使用道具"); else console.log("无该道具")
                }, t.prototype.checkProp = function (e) {
                    var t = !1;
                    return r.default.inst.levelPanel.node.active && 10001 != e && 10002 != e || (t = this.CheckCanUseProp(e)), t
                }, t.prototype.CheckCanUseProp = function (e) {
                    var t = !1;
                    if (o.PlayerData.propMap.has(e)) switch (e) {
                        case l.PropType.AddBlood:
                            t = o.PlayerData.curHp != o.PlayerData.maxHp;
                            break;
                        case l.PropType.AddArmor:
                            t = o.PlayerData.curArmor != o.PlayerData.maxArmor;
                            break;
                        case l.PropType.DoubleDamage:
                            t = 1 != o.PlayerData.isCanDoubleDamage;
                            break;
                        case l.PropType.RandomKillNoBossEnemy:
                            t = r.default.inst.itemManager.checkKillMonster();
                            break;
                        case l.PropType.SwordTurenToGold:
                        case l.PropType.SwordTurnToPotion:
                            t = r.default.inst.itemManager.checkItemType(s.ItemType.Sword);
                            break;
                        case l.PropType.ShieldTurnToSword:
                        case l.PropType.ShieldTurnTOGold:
                            t = r.default.inst.itemManager.checkItemType(s.ItemType.Shield);
                            break;
                        case l.PropType.GoldTurnToSword:
                            t = r.default.inst.itemManager.checkItemType(s.ItemType.Gold);
                            break;
                        case l.PropType.CollectPotion:
                            t = r.default.inst.itemManager.checkItemType(s.ItemType.Potion);
                            break;
                        case l.PropType.CollectShild:
                            t = r.default.inst.itemManager.checkItemType(s.ItemType.Shield);
                            break;
                        case l.PropType.CollectGold:
                            t = r.default.inst.itemManager.checkItemType(s.ItemType.Gold)
                    }
                    return t
                }, t.prototype.DoUseProp = function (e) {
                    switch (e) {
                        case l.PropType.AddBlood:
                            var t = o.PlayerData.maxHp * i.Item.get(e).param;
                            r.default.inst.playerInfo.ChangeHp(t);
                            break;
                        case l.PropType.AddArmor:
                            var n = o.PlayerData.maxArmor * i.Item.get(e).param;
                            r.default.inst.playerInfo.ChangeArmor(n);
                            break;
                        case l.PropType.DoubleDamage:
                            o.PlayerData.isCanDoubleDamage = !0, a.default.instance.mainUIPanel.showDoubleAttack(!0);
                            break;
                        case l.PropType.RandomKillNoBossEnemy:
                            r.default.inst.itemManager.killMonster();
                            break;
                        case l.PropType.SwordTurenToGold:
                            r.default.inst.itemManager.ItemTypeConvert(s.ItemType.Sword, s.ItemType.Gold);
                            break;
                        case l.PropType.SwordTurnToPotion:
                            r.default.inst.itemManager.ItemTypeConvert(s.ItemType.Sword, s.ItemType.Potion);
                            break;
                        case l.PropType.ShieldTurnToSword:
                            r.default.inst.itemManager.ItemTypeConvert(s.ItemType.Shield, s.ItemType.Sword);
                            break;
                        case l.PropType.ShieldTurnTOGold:
                            r.default.inst.itemManager.ItemTypeConvert(s.ItemType.Shield, s.ItemType.Gold);
                            break;
                        case l.PropType.GoldTurnToSword:
                            r.default.inst.itemManager.ItemTypeConvert(s.ItemType.Gold, s.ItemType.Sword);
                            break;
                        case l.PropType.CollectPotion:
                            r.default.inst.itemManager.ItemTypeEliminate(s.ItemType.Potion);
                            break;
                        case l.PropType.CollectShild:
                            r.default.inst.itemManager.ItemTypeEliminate(s.ItemType.Shield);
                            break;
                        case l.PropType.CollectGold:
                            r.default.inst.itemManager.ItemTypeEliminate(s.ItemType.Gold)
                    }
                }, t.prototype.PlayUsePropEffect = function () {
                }, t = __decorate([u], t)
            }(cc.Component));
        n.default = d, cc._RF.pop()
    }, {
        "../Data/Item": "Item",
        "../Eume/ItemType": "ItemType",
        "../Eume/PropType": "PropType",
        "../Platform/PersistentManager": "PersistentManager",
        "../UI/UIPanelController": "UIPanelController",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./GameManager": "GameManager"
    }],
    PropPool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8f724favrlK+qNaGw2y9K6d", "PropPool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.propItemPrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPropPool = function () {
                null == this.propPoolList && (this.propPoolList = new cc.NodePool);
                for (var e = 0; e < 13; ++e) {
                    var t = cc.instantiate(this.propItemPrefab);
                    this.propPoolList.put(t)
                }
            }, e.prototype.GetPropItem = function (e) {
                var t = null;
                return (t = 0 < this.propPoolList.size() ? this.propPoolList.get() : cc.instantiate(this.propItemPrefab)).parent = e, t
            }, e.prototype.PutPropItem = function (e) {
                this.propPoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.propPoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "propItemPrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    PropType: [function (e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "5ef8aevc0dJf5xp76CjonA9", "PropType"), Object.defineProperty(n, "__esModule", {value: !0}), (o = n.PropType || (n.PropType = {}))[o.AddBlood = 10001] = "AddBlood", o[o.AddArmor = 10002] = "AddArmor", o[o.DoubleDamage = 10003] = "DoubleDamage", o[o.RandomKillNoBossEnemy = 10004] = "RandomKillNoBossEnemy", o[o.SwordTurenToGold = 10005] = "SwordTurenToGold", o[o.SwordTurnToPotion = 10006] = "SwordTurnToPotion", o[o.ShieldTurnToSword = 10007] = "ShieldTurnToSword", o[o.ShieldTurnTOGold = 10008] = "ShieldTurnTOGold", o[o.GoldTurnToSword = 10009] = "GoldTurnToSword", o[o.CollectPotion = 10010] = "CollectPotion", o[o.CollectShild = 10011] = "CollectShild", o[o.CollectGold = 10012] = "CollectGold", cc._RF.pop()
    }, {}],
    SchedulePool: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "61213bOuA5FPakbyMFqnc/Z", "SchedulePool"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.schedulePrefab = null, e
            }

            return __extends(e, t), e.prototype.InitPool = function () {
                this.schedulePoolList = new cc.NodePool;
                for (var e = 0; e < 2; ++e) {
                    var t = cc.instantiate(this.schedulePrefab);
                    this.schedulePoolList.put(t)
                }
            }, e.prototype.CreateItem = function (e, t, n) {
                var o = null;
                return (o = 0 < this.schedulePoolList.size() ? this.schedulePoolList.get() : cc.instantiate(this.schedulePrefab)).parent = e, o.position = t, o.children[0].getComponent(cc.Sprite).spriteFrame = n, o
            }, e.prototype.PutItem = function (e) {
                this.schedulePoolList.put(e)
            }, e.prototype.ClearPool = function () {
                this.schedulePoolList.clear()
            }, __decorate([l(cc.Prefab)], e.prototype, "schedulePrefab", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    ShareBtn: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "df9d5N3/shJnrSOoCaBqYyO", "ShareBtn"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../../../Script/Platform/PlatformFactory"), a = e("../../../Script/charactor/PlayerInfo"),
            l = cc._decorator, r = l.ccclass, i = (l.property, function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return __extends(t, e), t.prototype.start = function () {
                    var e = this;
                    this.node.on("click", function () {
                        e.onClick()
                    })
                }, t.prototype.onClick = function () {
                    console.log("ShareBtn-->", o.default.inst)
                    // o.default.inst.currentPlatform.share(a.PlayerData.curLevel)
                    wxHelper.shareMessage()
                }, t = __decorate([r], t)
            }(cc.Component));
        n.default = i, cc._RF.pop()
    }, {
        "../../../Script/Platform/PlatformFactory": "PlatformFactory",
        "../../../Script/charactor/PlayerInfo": "PlayerInfo"
    }],
    ShareManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "319a1gTYvlBTJWJPOAyzTks", "ShareManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.shareBtn = null, e
            }

            return __extends(e, t), e.prototype.onLoad = function () {
                var e = this;
                this.shareBtn.node.on("click", function () {
                    return e.ClickShareBtn()
                }, this)
            }, e.prototype.ClickShareBtn = function () {
            }, __decorate([l(cc.Button)], e.prototype, "shareBtn", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    ShortCutBtn: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "1bde4taJZVJToLxRfktCkM9", "ShortCutBtn"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = (o.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return __extends(t, e), t.prototype.shortCutBtnOnClick = function () {
                this.node.active = !1, "undefined" != typeof FBInstant && FBInstant.canCreateShortcutAsync().then(function (e) {
                    e && FBInstant.createShortcutAsync().then(function () {
                    }).catch(function () {
                    })
                })
            }, t.prototype.start = function () {
                var t = this;
                this.node.on("click", function () {
                    t.shortCutBtnOnClick()
                }), this.node.active = !1, "undefined" != typeof FBInstant && FBInstant.canCreateShortcutAsync().then(function (e) {
                    e && (t.node.active = !0)
                })
            }, t = __decorate([a], t)
        }(cc.Component));
        n.default = l, cc._RF.pop()
    }, {}],
    SkillInfo: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "2440a2nqSBIKJDK5O715UDu", "SkillInfo"), Object.defineProperty(n, "__esModule", {value: !0}), n.SkillInfo = new Map, n.SkillInfo.set(1, {
            skillMaxLevel: 5,
            skillName: "愈合",
            skillDes: "每行动一次自动恢复生命",
            skillIcon: 0
        }), n.SkillInfo.set(2, {
            skillMaxLevel: 5,
            skillName: "贪婪",
            skillDes: "每行动一次自动获得金币",
            skillIcon: 1
        }), n.SkillInfo.set(3, {
            skillMaxLevel: 5,
            skillName: "暴击",
            skillDes: "每次攻击有几率造成双倍伤害",
            skillIcon: 2
        }), n.SkillInfo.set(4, {
            skillMaxLevel: 5,
            skillName: "闪避",
            skillDes: "有几率闪避怪物的攻击",
            skillIcon: 3
        }), n.SkillInfo.set(5, {
            skillMaxLevel: 5,
            skillName: "铸甲",
            skillDes: "每行动一次自动获得护甲",
            skillIcon: 4
        }), n.SkillInfo.set(6, {
            skillMaxLevel: 5,
            skillName: "额外金币",
            skillDes: "收集的金币额外增加",
            skillIcon: 5
        }), n.SkillInfo.set(7, {
            skillMaxLevel: 5,
            skillName: "进阶治疗",
            skillDes: "获得的治疗量额外增加",
            skillIcon: 6
        }), n.SkillInfo.set(8, {
            skillMaxLevel: 5,
            skillName: "双层护甲",
            skillDes: "护甲能够抵挡更多的伤害",
            skillIcon: 7
        }), n.SkillInfo.set(9, {
            skillMaxLevel: 5,
            skillName: "倒刺护甲",
            skillDes: "护甲抵挡伤害的同时对敌方造成伤害",
            skillIcon: 8
        }), cc._RF.pop()
    }, {}],
    SkillItem: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9c809nCh1tLQpclOeYOWjet", "SkillItem"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../Data/Skill"), a = cc._decorator, l = a.ccclass, r = a.property, i = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon = null, e.level = null, e.describe = null, e
            }

            return __extends(e, t), e.prototype.InitItem = function (e, t) {
                this.describe.node.active = !1, this.icon.spriteFrame = t, this.level.string = "LV" + o.Skill.get(e).skillLv.toString(), this.describe.string = o.Skill.get(e).skillName.toString(), this.skillName = o.Skill.get(e).skillDes.toString()
            }, e.prototype.onEnable = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.ShowTips, this), this.node.on(cc.Node.EventType.TOUCH_END, this.HideTips, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.HideTips, this)
            }, e.prototype.onDisable = function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.ShowTips, this), this.node.off(cc.Node.EventType.TOUCH_END, this.HideTips, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.HideTips, this)
            }, e.prototype.ShowTips = function () {
                this.describe.string = this.skillName, this.describe.node.active = !0
            }, e.prototype.HideTips = function () {
                this.describe.node.active = !1
            }, __decorate([r(cc.Sprite)], e.prototype, "icon", void 0), __decorate([r(cc.Label)], e.prototype, "level", void 0), __decorate([r(cc.Label)], e.prototype, "describe", void 0), e = __decorate([l], e)
        }(cc.Component);
        n.default = i, cc._RF.pop()
    }, {"../Data/Skill": "Skill"}],
    SkillPrizeItem: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "4050c/UGP9Dj4dWM6kGr9YE", "SkillPrizeItem"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./UIPanelController"), a = e("../Manager/GameManager"), l = cc._decorator, r = l.ccclass,
            i = l.property, s = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.skillIcon = null, e.skillBg = null, e
                }

                return __extends(e, t), e.prototype.InitItem = function (e, t, n) {
                    this.itemId = e, this.index = n, this.iconIndex = t, 0 == n ? this.RefreshIcon(!0) : this.RefreshIcon(!1), this.node.on("click", this.BeSelected, this)
                }, e.prototype.RefreshIcon = function (e) {
                    e ? (this.skillBg.spriteFrame = a.default.inst.icons.itemSelectBgIcons[this.index], this.skillIcon.spriteFrame = a.default.inst.icons.skillSelectIcons[this.iconIndex]) : (this.skillBg.spriteFrame = a.default.inst.icons.itemBgIcons[this.index], this.skillIcon.spriteFrame = a.default.inst.icons.skillIcons[this.iconIndex])
                }, e.prototype.BeSelected = function () {
                    o.default.instance.skillPrizePanel.ChangeCurSelectItem(this.itemId, this.index)
                }, __decorate([i(cc.Sprite)], e.prototype, "skillIcon", void 0), __decorate([i(cc.Sprite)], e.prototype, "skillBg", void 0), e = __decorate([r], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {"../Manager/GameManager": "GameManager", "./UIPanelController": "UIPanelController"}],
    SkillPrizePanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3be7eXJb3VBzYULU2jS08CJ", "SkillPrizePanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var I = e("../charactor/PlayerInfo"), f = e("../Data/Skill"), P = e("../Data/SkillInfo"),
            a = e("../Manager/GameManager"), g = e("./SkillPrizeItem"), o = e("../Data/LevelInfo"), l = cc._decorator,
            r = l.ccclass, i = l.property, s = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.skillPrizePanel = null, e.skillItemParent = null, e.confirmBtn = null, e.money = null, e.skillDes = null, e.black = null, e.light = null, e.curSelectSkillId = -1, e.skillItemList = [], e.isCompleted = !1, e
                }

                return __extends(e, t), e.prototype.InitPanel = function () {
                    this.setIsCompleted(!0), this.skillItemList = [], this.RefreshSkillList(), this.money.string = o.LevelInfo.get(I.PlayerData.curLevel).reward.toString(), this.skillPrizePanel.scale = 0, this.skillPrizePanel.active = !0, this.showPrizePanelBG(!1), this.confirmBtn.node.on("click", this.ClickConfirm, this), this.PlayOpenPanelAnimation(!0)
                }, e.prototype.setIsCompleted = function (e) {
                    this.isCompleted = e
                }, e.prototype.getIsCompleted = function () {
                    return this.isCompleted
                }, e.prototype.showPrizePanelBG = function (e) {
                    this.black.active = e, this.light.active = e
                }, e.prototype.PlayEffect = function () {
                    var e = cc.repeatForever(cc.rotateBy(10, 360));
                    this.light.runAction(e)
                }, e.prototype.PlayOpenPanelAnimation = function (t) {
                    var e, n = this, o = cc.callFunc(function (e) {
                        t && (a.default.inst.audioManager.playVictory(), n.showPrizePanelBG(!0), n.PlayEffect())
                    }, this);
                    t ? e = cc.sequence(cc.scaleTo(.5, 1), o) : (this.showPrizePanelBG(!1), e = cc.sequence(cc.scaleTo(.5, 0), o)), this.skillPrizePanel.runAction(e)
                }, e.prototype.RefreshSkillList = function () {
                    for (var e = I.PlayerData.curskills.length, t = [], n = 0; n < e; n++) t.push(f.Skill.get(I.PlayerData.curskills[n]).skillType);
                    if (e < 4) {
                        var o = Array.from(P.SkillInfo.keys()), a = [];
                        o.forEach(function (e) {
                            t.indexOf(e) < 0 && a.push(e)
                        });
                        var l = f.Skill.size;
                        for (n = 0; n < this.skillItemParent.childrenCount; n++) {
                            this.skillItemParent.children[n].active = !0;
                            for (var r = Math.floor(Math.random() * a.length), i = a[r], s = f.Skill.entries(), c = 0; c < l; c++) {
                                var p = s.next().value;
                                if (p[1].skillType == i && 1 == p[1].skillLv) {
                                    0 == n && (this.curSelectSkillId = p[0], this.skillDes.string = f.Skill.get(p[0]).skillDes);
                                    var u = this.skillItemParent.children[n].getComponent(g.default),
                                        d = P.SkillInfo.get(i).skillIcon;
                                    u.InitItem(p[0], d, n), this.skillItemList.push(u);
                                    break
                                }
                            }
                            a.splice(r, 1)
                        }
                    } else {
                        var v = [];
                        for (n = 0; n < I.PlayerData.curskills.length; n++) {
                            var A = I.PlayerData.curskills[n], h = f.Skill.get(A).skillType;
                            f.Skill.get(A).skillLv < P.SkillInfo.get(h).skillMaxLevel && v.push(A)
                        }
                        if (3 < v.length) {
                            r = Math.floor(Math.random() * t.length);
                            v.splice(r, 1)
                        }
                        for (n = 0; n < this.skillItemParent.childrenCount; n++) if (n < v.length) {
                            this.skillItemParent.children[n].active = !0;
                            var m = v[n], y = f.Skill.get(m).nextLv;
                            0 == n && (this.curSelectSkillId = y, this.skillDes.string = f.Skill.get(y).skillDes);
                            u = this.skillItemParent.children[n].getComponent("SkillPrizeItem"), h = f.Skill.get(y).skillType, d = P.SkillInfo.get(h).skillIcon;
                            u.InitItem(y, d, n), this.skillItemList.push(u)
                        } else this.skillItemParent.children[n].active = !1
                    }
                }, e.prototype.ChangeCurSelectItem = function (e, t) {
                    for (var n = 0; n < this.skillItemList.length; n++) n == t ? this.skillItemList[n].RefreshIcon(!0) : this.skillItemList[n].RefreshIcon(!1);
                    this.skillDes.string = f.Skill.get(e).skillDes, this.curSelectSkillId = e
                }, e.prototype.ClickConfirm = function () {
                    var e = o.LevelInfo.get(I.PlayerData.curLevel).reward;
                    if (a.default.inst.playerInfo.ChangeMoney(e), this.skillItemList = [], this.confirmBtn.node.off("click", this.ClickConfirm, this), this.skillPrizePanel.active = !1, I.PlayerData.curskills.length < 4) I.PlayerData.curskills.push(this.curSelectSkillId); else for (var t = 0; t < I.PlayerData.curskills.length; t++) {
                        var n = I.PlayerData.curskills[t];
                        f.Skill.get(n).skillType == f.Skill.get(this.curSelectSkillId).skillType && (I.PlayerData.curskills[t] = this.curSelectSkillId)
                    }
                    this.setIsCompleted(!1), a.default.inst.showGamePanel(!1), a.default.inst.showLevelPanel(!0, !0), a.default.inst.levelPanel.showAdBtn(!0)
                }, __decorate([i(cc.Node)], e.prototype, "skillPrizePanel", void 0), __decorate([i(cc.Node)], e.prototype, "skillItemParent", void 0), __decorate([i(cc.Button)], e.prototype, "confirmBtn", void 0), __decorate([i(cc.Label)], e.prototype, "money", void 0), __decorate([i(cc.Label)], e.prototype, "skillDes", void 0), __decorate([i(cc.Node)], e.prototype, "black", void 0), __decorate([i(cc.Node)], e.prototype, "light", void 0), e = __decorate([r], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {
        "../Data/LevelInfo": "LevelInfo",
        "../Data/Skill": "Skill",
        "../Data/SkillInfo": "SkillInfo",
        "../Manager/GameManager": "GameManager",
        "../charactor/PlayerInfo": "PlayerInfo",
        "./SkillPrizeItem": "SkillPrizeItem"
    }],
    Skill: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3b447Kr5G5Ef5TCva27EmVd", "Skill"), Object.defineProperty(n, "__esModule", {value: !0}), n.Skill = new Map, n.Skill.set(10011, {
            nextLv: 10012,
            skillType: 1,
            skillName: "cure",
            skillDes: "每回合结束时恢复3%的气血",
            skillLv: 1,
            skillParam: .03
        }), n.Skill.set(10012, {
            nextLv: 10013,
            skillType: 1,
            skillName: "cure",
            skillDes: "每回合结束时恢复6%的气血",
            skillLv: 2,
            skillParam: .06
        }), n.Skill.set(10013, {
            nextLv: 10014,
            skillType: 1,
            skillName: "cure",
            skillDes: "每回合结束时恢复9%的生命值",
            skillLv: 3,
            skillParam: .09
        }), n.Skill.set(10014, {
            nextLv: 10015,
            skillType: 1,
            skillName: "cure",
            skillDes: "每回合结束时恢复12%的气血",
            skillLv: 4,
            skillParam: .12
        }), n.Skill.set(10015, {
            nextLv: 0,
            skillType: 1,
            skillName: "cure",
            skillDes: "每回合结束时恢复15%的气血",
            skillLv: 5,
            skillParam: .15
        }), n.Skill.set(10021, {
            nextLv: 10022,
            skillType: 2,
            skillName: "greed",
            skillDes: "每回合结束时获得5金",
            skillLv: 1,
            skillParam: 5
        }), n.Skill.set(10022, {
            nextLv: 10023,
            skillType: 2,
            skillName: "greed",
            skillDes: "每回合结束时获得10金",
            skillLv: 2,
            skillParam: 10
        }), n.Skill.set(10023, {
            nextLv: 10024,
            skillType: 2,
            skillName: "greed",
            skillDes: "每回合结束时获得15金",
            skillLv: 3,
            skillParam: 15
        }), n.Skill.set(10024, {
            nextLv: 10025,
            skillType: 2,
            skillName: "greed",
            skillDes: "每回合结束时获得20金",
            skillLv: 4,
            skillParam: 20
        }), n.Skill.set(10025, {
            nextLv: 0,
            skillType: 2,
            skillName: "greed",
            skillDes: "每回合结束时获得25金",
            skillLv: 5,
            skillParam: 25
        }), n.Skill.set(10031, {
            nextLv: 10032,
            skillType: 3,
            skillName: "critical strike",
            skillDes: "给5%的几率造成双倍伤害",
            skillLv: 1,
            skillParam: .05
        }), n.Skill.set(10032, {
            nextLv: 10033,
            skillType: 3,
            skillName: "critical strike",
            skillDes: "给10%的几率造成双倍伤害",
            skillLv: 2,
            skillParam: .1
        }), n.Skill.set(10033, {
            nextLv: 10034,
            skillType: 3,
            skillName: "critical strike",
            skillDes: "给15%的几率造成双倍伤害",
            skillLv: 3,
            skillParam: .15
        }), n.Skill.set(10034, {
            nextLv: 10035,
            skillType: 3,
            skillName: "critical strike",
            skillDes: "给20%的几率造成双倍伤害",
            skillLv: 4,
            skillParam: .2
        }), n.Skill.set(10035, {
            nextLv: 0,
            skillType: 3,
            skillName: "critical strike",
            skillDes: "给25%的几率造成双倍伤害",
            skillLv: 5,
            skillParam: .25
        }), n.Skill.set(10041, {
            nextLv: 10042,
            skillType: 4,
            skillName: "evasion",
            skillDes: "给5%的机会避免攻击",
            skillLv: 1,
            skillParam: .05
        }), n.Skill.set(10042, {
            nextLv: 10043,
            skillType: 4,
            skillName: "evasion",
            skillDes: "给10%的机会避免攻击",
            skillLv: 2,
            skillParam: .1
        }), n.Skill.set(10043, {
            nextLv: 10044,
            skillType: 4,
            skillName: "evasion",
            skillDes: "给15%的机会避免攻击",
            skillLv: 3,
            skillParam: .15
        }), n.Skill.set(10044, {
            nextLv: 10045,
            skillType: 4,
            skillName: "evasion",
            skillDes: "给20%的机会避免攻击",
            skillLv: 4,
            skillParam: .2
        }), n.Skill.set(10045, {
            nextLv: 0,
            skillType: 4,
            skillName: "evasion",
            skillDes: "给25%的机会避免攻击",
            skillLv: 5,
            skillParam: .25
        }), n.Skill.set(10051, {
            nextLv: 10052,
            skillType: 5,
            skillName: "gain armor",
            skillDes: "每回合结束时获得2个护甲",
            skillLv: 1,
            skillParam: 2
        }), n.Skill.set(10052, {
            nextLv: 10053,
            skillType: 5,
            skillName: "gain armor",
            skillDes: "每回合结束时获得4个护甲",
            skillLv: 2,
            skillParam: 4
        }), n.Skill.set(10053, {
            nextLv: 10054,
            skillType: 5,
            skillName: "gain armor",
            skillDes: "每回合结束时获得6个护甲",
            skillLv: 3,
            skillParam: 6
        }), n.Skill.set(10054, {
            nextLv: 10055,
            skillType: 5,
            skillName: "gain armor",
            skillDes: "每回合结束时获得8个护甲",
            skillLv: 4,
            skillParam: 8
        }), n.Skill.set(10055, {
            nextLv: 0,
            skillType: 5,
            skillName: "gain armor",
            skillDes: "每回合结束时获得10个护甲",
            skillLv: 5,
            skillParam: 10
        }), n.Skill.set(10061, {
            nextLv: 10062,
            skillType: 6,
            skillName: "extra gold",
            skillDes: "收金时增加20%的金",
            skillLv: 1,
            skillParam: .2
        }), n.Skill.set(10062, {
            nextLv: 10063,
            skillType: 6,
            skillName: "extra gold",
            skillDes: "收金时增加40%的金",
            skillLv: 2,
            skillParam: .4
        }), n.Skill.set(10063, {
            nextLv: 10064,
            skillType: 6,
            skillName: "extra gold",
            skillDes: "收金时增加60%的金",
            skillLv: 3,
            skillParam: .6
        }), n.Skill.set(10064, {
            nextLv: 10065,
            skillType: 6,
            skillName: "extra gold",
            skillDes: "收金时增加80%的金",
            skillLv: 4,
            skillParam: .8
        }), n.Skill.set(10065, {
            nextLv: 0,
            skillType: 6,
            skillName: "extra gold",
            skillDes: "收金时增加100%的金",
            skillLv: 5,
            skillParam: 1
        }), n.Skill.set(10071, {
            nextLv: 10072,
            skillType: 7,
            skillName: "further cure",
            skillDes: "当收集药剂时恢复20%的生命值",
            skillLv: 1,
            skillParam: .2
        }), n.Skill.set(10072, {
            nextLv: 10073,
            skillType: 7,
            skillName: "further cure",
            skillDes: "当收集药剂时恢复40%的生命值",
            skillLv: 2,
            skillParam: .4
        }), n.Skill.set(10073, {
            nextLv: 10074,
            skillType: 7,
            skillName: "further cure",
            skillDes: "当收集药剂时恢复60%的生命值",
            skillLv: 3,
            skillParam: .6
        }), n.Skill.set(10074, {
            nextLv: 10075,
            skillType: 7,
            skillName: "further cure",
            skillDes: "当收集药剂时恢复80%的生命值",
            skillLv: 4,
            skillParam: .8
        }), n.Skill.set(10075, {
            nextLv: 0,
            skillType: 7,
            skillName: "further cure",
            skillDes: "当收集药剂时恢复100%的生命值",
            skillLv: 5,
            skillParam: 1
        }), n.Skill.set(10081, {
            nextLv: 10082,
            skillType: 8,
            skillName: "double armor",
            skillDes: "阿莫的每一点吸收2点伤害",
            skillLv: 1,
            skillParam: 2
        }), n.Skill.set(10082, {
            nextLv: 10083,
            skillType: 8,
            skillName: "double armor",
            skillDes: "阿莫的每一点吸收4点伤害",
            skillLv: 2,
            skillParam: 4
        }), n.Skill.set(10083, {
            nextLv: 10084,
            skillType: 8,
            skillName: "double armor",
            skillDes: "阿莫的每一点吸收6点伤害",
            skillLv: 3,
            skillParam: 6
        }), n.Skill.set(10084, {
            nextLv: 10085,
            skillType: 8,
            skillName: "double armor",
            skillDes: "阿莫的每一点吸收8点伤害",
            skillLv: 4,
            skillParam: 8
        }), n.Skill.set(10085, {
            nextLv: 0,
            skillType: 8,
            skillName: "double armor",
            skillDes: "阿莫的每一点吸收10点伤害",
            skillLv: 5,
            skillParam: 10
        }), n.Skill.set(10091, {
            nextLv: 10092,
            skillType: 9,
            skillName: "thornmail",
            skillDes: "失去1甲对敌人造成2点伤害",
            skillLv: 1,
            skillParam: 2
        }), n.Skill.set(10092, {
            nextLv: 10093,
            skillType: 9,
            skillName: "thornmail",
            skillDes: "失去1甲对敌人造成3点伤害",
            skillLv: 2,
            skillParam: 3
        }), n.Skill.set(10093, {
            nextLv: 10094,
            skillType: 9,
            skillName: "thornmail",
            skillDes: "失去1甲对敌人造成4点伤害",
            skillLv: 3,
            skillParam: 4
        }), n.Skill.set(10094, {
            nextLv: 10095,
            skillType: 9,
            skillName: "thornmail",
            skillDes: "失去1甲对敌人造成5点伤害",
            skillLv: 4,
            skillParam: 5
        }), n.Skill.set(10095, {
            nextLv: 0,
            skillType: 9,
            skillName: "thornmail",
            skillDes: "失去1甲对敌人造成点伤害",
            skillLv: 5,
            skillParam: 6
        }), cc._RF.pop()
    }, {}],
    TimeCounterManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "de152H+cOhDOqsiMGwE4ix/", "TimeCounterManager"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("../Util/TimeCounter"), a = cc._decorator, l = a.ccclass, r = (a.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return __extends(t, e), (n = t).prototype.onLoad = function () {
                null == n.inst && (n.inst = this), this.timeCounters = []
            }, t.prototype.createTimeCounter = function (e, t) {
                var n = new o.TimeCounter(e, t);
                return this.timeCounters.push(n), n
            }, t.prototype.update = function (t) {
                this.timeCounters.forEach(function (e) {
                    e.update(t)
                })
            }, t = n = __decorate([l], t);
            var n
        }(cc.Component));
        n.default = r, cc._RF.pop()
    }, {"../Util/TimeCounter": "TimeCounter"}],
    TimeCounter: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d41b40JnwREb5EH8bmZALUE", "TimeCounter"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = function () {
            function e(e, t) {
                this.time = 0, this.interval = e, this.onTick = t, this.started = !1
            }

            return e.prototype.start = function () {
                this.started = !0
            }, e.prototype.update = function (e) {
                this.started && (this.time += e, this.time >= this.interval && (this.onTick(), this.time -= this.interval))
            }, e.prototype.setInterval = function (e) {
                this.interval = e
            }, e
        }();
        n.TimeCounter = o, cc._RF.pop()
    }, {}],
    TreasureBoxPrizePanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "f149b0tFtdFirublJNXqsNn", "TreasureBoxPrizePanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var u = e("../Data/ItemGroup"), d = e("../Data/Item"), v = e("../Manager/GameManager"), A = e("./PrizeItem"),
            o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.propPrizePanel = null, e.black = null, e.light = null, e.propItemParent = null, e.confirmBtn = null, e.propDes = null, e.curSelectPropItemId = 0, e.rotate = 0, e
                }

                return __extends(e, t), e.prototype.InitPanel = function (e) {
                    this.RefreshPropList(e), this.propPrizePanel.active = !0, this.showPropPrizePanelBG(!1), this.propPrizePanel.scale = 0, this.confirmBtn.node.on("click", this.ClickConfirm, this), this.PlayOpenPanelAnimation(!0)
                }, e.prototype.showPropPrizePanelBG = function (e) {
                    this.black.active = e, this.light.active = e, this.confirmBtn.node.active = e
                }, e.prototype.PlayEffect = function () {
                    var e = cc.repeatForever(cc.rotateBy(10, 360));
                    this.light.runAction(e)
                }, e.prototype.PlayOpenPanelAnimation = function (t) {
                    var e, n = this, o = cc.callFunc(function (e) {
                        t ? (n.showPropPrizePanelBG(!0), n.PlayEffect()) : n.propPrizePanel.active = !1
                    }, this);
                    t ? e = cc.sequence(cc.scaleTo(.3, 1), o) : (this.showPropPrizePanelBG(!1), e = cc.sequence(cc.scaleTo(.3, 0), o)), this.propPrizePanel.runAction(e)
                }, e.prototype.RefreshPropList = function (e) {
                    for (var t = [], n = [], o = 0, a = 0; a < u.ItemGroup.length; a++) u.ItemGroup[a].groupId == e && (o += u.ItemGroup[a].weight, n.push(u.ItemGroup[a].weight), t.push(u.ItemGroup[a].itemId));
                    for (a = 0; a < 3; a++) for (var l = Math.random(), r = 0, i = 0; i < n.length; i++) {
                        var s = r;
                        if (r += n[i] / o, s < l && l < r) {
                            var c = t[i];
                            0 == a && (this.curSelectPropItemId = c, this.propDes.string = d.Item.get(c).des);
                            var p = v.default.inst.icons.propIcons[d.Item.get(c).res];
                            this.propItemParent.children[a].getComponent(A.default).InitItem(c, p, a), o -= n[i], n.splice(i, 1), t.splice(i, 1);
                            break
                        }
                    }
                }, e.prototype.ChangeCurSelectItem = function (e, t) {
                    this.propDes.string = d.Item.get(e).des, this.curSelectPropItemId = e;
                    for (var n = 0; n < this.propItemParent.childrenCount; n++) {
                        var o = this.propItemParent.children[n];
                        t == n ? (o.scale = 1.2, o.children[0].scale = 1) : (o.scale = 1, o.children[0].scale = 0)
                    }
                }, e.prototype.ClickConfirm = function () {
                    this.confirmBtn.node.off("click", this.ClickConfirm, this), v.default.inst.levelPanel.node.active && v.default.inst.levelPanel.showAdBtn(!1), this.PlayOpenPanelAnimation(!1), v.default.inst.propManager.AddProp(this.curSelectPropItemId, 1)
                }, e.prototype.ClickDoublePrize = function () {
                }, __decorate([l(cc.Node)], e.prototype, "propPrizePanel", void 0), __decorate([l(cc.Node)], e.prototype, "black", void 0), __decorate([l(cc.Node)], e.prototype, "light", void 0), __decorate([l(cc.Node)], e.prototype, "propItemParent", void 0), __decorate([l(cc.Button)], e.prototype, "confirmBtn", void 0), __decorate([l(cc.Label)], e.prototype, "propDes", void 0), e = __decorate([a], e)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {
        "../Data/Item": "Item",
        "../Data/ItemGroup": "ItemGroup",
        "../Manager/GameManager": "GameManager",
        "./PrizeItem": "PrizeItem"
    }],
    UIPanelController: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "86a5bI+qI5FTrq+H67TScgz", "UIPanelController"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = e("./MainUIPanel"), a = e("./MenuPanel"), l = e("./PlayerInfoPanel"), r = e("../Manager/GameManager"),
            i = e("./TreasureBoxPrizePanel"), s = e("./SkillPrizePanel"), c = e("../Platform/PersistentManager"),
            p = cc._decorator, u = p.ccclass, d = (p.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mainUIPanel = null, e.menuPanel = null, e.playerInfoPanel = null, e.treasureBoxPrizePanel = null, e.skillPrizePanel = null, e.curShowSprite = null, e.tex = null, e
                }

                return __extends(e, t), (n = e).prototype.init = function () {
                    r.default.inst.levelPanel.node.active || r.default.inst.showGamePanel(!0), null == n.instance && (n.instance = this), this.mainUIPanel = this.node.getComponent(o.default), this.menuPanel = this.node.getComponent(a.default), this.playerInfoPanel = this.node.getComponent(l.default), this.treasureBoxPrizePanel = this.node.getComponent(i.default), this.skillPrizePanel = this.node.getComponent(s.default), this.mainUIPanel.InitMainUIPanel(), this.tex = new cc.Texture2D
                }, e.prototype.ClickRestart = function () {
                    r.default.inst.playerInfo.clearCompleteLevelList(), r.default.inst.showLevelPanel(!0), c.default.inst.save(!0), r.default.inst.levelPanel.refreshLevel(), this.mainUIPanel.ResetData()

                }, e.prototype.SetCurShowSprite = function (e) {
                    this.curShowSprite = e
                }, e.prototype.SetNodeActive = function (e, t) {
                    null != e && (e.scale = t ? 1 : 0)
                }, e = n = __decorate([u], e);
                var n
            }(cc.Component));
        n.default = d, cc._RF.pop()
    }, {
        "../Manager/GameManager": "GameManager",
        "../Platform/PersistentManager": "PersistentManager",
        "./MainUIPanel": "MainUIPanel",
        "./MenuPanel": "MenuPanel",
        "./PlayerInfoPanel": "PlayerInfoPanel",
        "./SkillPrizePanel": "SkillPrizePanel",
        "./TreasureBoxPrizePanel": "TreasureBoxPrizePanel"
    }],
    Utils: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "7718aymY5hJOYaZJ8Dq+/nn", "Utils"), String.prototype.format || (String.prototype.format = function () {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            return this.replace(/{(\d+)}/g, function (e, t) {
                return void 0 !== n[t] ? n[t] : e
            })
        }), cc._RF.pop()
    }, {}],
    loading: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e1cfe+R3PhGvKZv3BCipKpK", "loading"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, a = o.ccclass, l = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.text = null, e
            }

            return __extends(e, t), e.prototype.start = function () {
                console.log("222", this.node)
                uiManager.seekNodeWithName("login", this.node).active = false;
                var a = this;
                cc.loader.onProgress = function (e, t, n) {
                    var o = Math.floor(e / t * 100);
                    a.text.string = o.toString() + "%"
                }, cc.director.preloadScene("helloworld", function () {
                    cc.loader.onProgress = null, cc.director.loadScene("helloworld")
                })
            }, e.prototype.onLoad = function () {

            }, __decorate([l(cc.Label)], e.prototype, "text", void 0), e = __decorate([a], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}]
}, {}, ["BlockInput", "MoreView", "PlayBtn", "MainPromoBtn", "MoreBtn", "ShareBtn", "ShortCutBtn", "Boss", "BossSkill", "Conect", "Enemy", "EnemyGroup", "EnemySkill", "Item", "ItemGroup", "Level", "LevelEvent", "LevelInfo", "LvUp", "Skill", "SkillInfo", "FluxayEffect", "FluxayFrag", "BossSkillType", "EliminationType", "EventType", "ItemType", "LevelType ", "PlayerPropertyType", "PlayerSkillType", "PropType", "loading", "AdManager", "AudioManager", "BossSkillManager", "CalculationManager", "DataManager", "GameManager", "InputManager", "ItemManager", "Lanuch", "PropManager", "ShareManager", "TimeCounterManager", "ItemInfo", "LevelBossInfo", "LevelNodeInfo", "MonsterInfo", "BasePlatform", "Facebook", "PersistentManager", "PlatformFactory", "ArrowPool", "AttackEffectPool", "ItemPool", "LevelInfoPool", "MonsterAttackPool", "MonsterDeadPool", "NumPool", "PropPool", "SchedulePool", "GameOverPanel", "HelpPanel", "Icons", "LevelEventPanel", "LevelPanel", "LoginPanel", "MainUIPanel", "MenuPanel", "PlayerInfoPanel", "PrizeItem", "PropItem", "SkillItem", "SkillPrizeItem", "SkillPrizePanel", "TreasureBoxPrizePanel", "UIPanelController", "TimeCounter", "Utils", "PlayerInfo"]);