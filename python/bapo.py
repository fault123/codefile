for v in range(0,256):
    for w in range(0,256):
        for x in range(0,256):
            for y in range(0,256):
                for z in range(0,256):
                    if v * 23 + w * -32 + x * 98 + y * 55 + z * 90 == 333322:
                        if v * 123 + w * -322 + x * 68 + y * 67 + z * 32 == 707724:
                            if v * 266 + w * -34 + x * 43 + y * 8 + z * 32 == 1272529:
                                if v * 343 + w * -352 + x * 58 + y * 65 + z * 5 == 1672457:
                                    if v * 231 + w * -321 + x * 938 + y * 555 + z * 970 == 3372367:
                                        print(chr(v)+chr(w)+chr(x)+chr(y)+chr(z))
