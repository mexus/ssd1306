var searchIndex = {};
searchIndex["embedded_graphics"] = {"doc":"Embedded graphics","items":[[0,"drawable","embedded_graphics","`Drawable` trait and helpers",null,null],[6,"Coord","embedded_graphics::drawable","2D coordinate type",null,null],[6,"Color","","Monochrome colour type",null,null],[6,"Pixel","","A single pixel",null,null],[8,"Drawable","","Marks an object as \"drawable\". Must be implemented for all graphics objects",null,null],[0,"fonts","embedded_graphics","Pixel based fonts",null,null],[3,"Font6x8","embedded_graphics::fonts","Container struct to hold a positioned piece of text",null,null],[12,"pos","","Top left corner of the text",0,null],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",0,{"i":[{"n":"self"}],"o":{"n":"font6x8"}}],[11,"render_str","","",0,{"i":[{"n":"str"}],"o":{"n":"font6x8"}}],[11,"translate","","Translate the image from its current position to a new position by (x, y) pixels, returning a new `Font6x8`.",0,{"i":[{"n":"self"},{"n":"coord"}],"o":{"n":"self"}}],[8,"Font","","Common methods for all fonts",null,null],[10,"render_str","","Render a string in the implementing font's typeface.",1,{"i":[{"n":"str"}],"o":{"n":"self"}}],[0,"image","embedded_graphics","Image object",null,null],[3,"Image1BPP","embedded_graphics::image","1 bit per pixel image",null,null],[12,"offset","","Image offset in pixels from screen origin (0,0)",2,null],[3,"Image8BPP","","8 bit per pixel image",null,null],[12,"offset","","Top left corner offset from display origin (0,0)",3,null],[11,"fmt","","",2,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"new","","",2,null],[11,"translate","","Translate the image from its current position to a new position by (x, y) pixels, returning a new `Image1BPP`.",2,{"i":[{"n":"self"},{"n":"coord"}],"o":{"n":"self"}}],[11,"fmt","","",3,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"new","","Create a new 8BPP image with given data, width and height. Data length must equal `width * height`",3,null],[11,"translate","","Translate the image from its current position to a new position by (x, y) pixels, returning a new `Image8BPP`.",3,{"i":[{"n":"self"},{"n":"coord"}],"o":{"n":"self"}}],[8,"Image","","Image trait",null,null],[10,"new","","Create a new image with given pixel data, width and height",4,null],[0,"prelude","embedded_graphics","Prelude",null,null],[0,"primitives","","Graphics primitives",null,null],[0,"circle","embedded_graphics::primitives","The circle primitive",null,null],[3,"Circle","embedded_graphics::primitives::circle","Circle primitive",null,null],[12,"center","","Center point of circle",5,null],[12,"radius","","Radius of the circle",5,null],[12,"color","","Line colour of circle",5,null],[3,"CircleIterator","","Pixel iterator for each pixel in the circle border",null,null],[11,"fmt","","",5,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",5,{"i":[{"n":"self"}],"o":{"n":"circle"}}],[11,"new","","Create a new circle with center point, radius and border color",5,{"i":[{"n":"coord"},{"n":"u32"},{"n":"u8"}],"o":{"n":"self"}}],[11,"fmt","","",6,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",6,{"i":[{"n":"self"}],"o":{"n":"circleiterator"}}],[11,"next","","",6,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"translate","","Translate the circle center from its current position to a new position by (x, y) pixels, returning a new `Circle`.",5,{"i":[{"n":"self"},{"n":"coord"}],"o":{"n":"self"}}],[0,"line","embedded_graphics::primitives","The line primitive",null,null],[3,"Line","embedded_graphics::primitives::line","Line primitive",null,null],[12,"start","","Start point",7,null],[12,"end","","End point",7,null],[12,"color","","Line color",7,null],[3,"LineIterator","","Pixel iterator for each pixel in the line",null,null],[11,"fmt","","",7,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",7,{"i":[{"n":"self"}],"o":{"n":"line"}}],[11,"new","","Create a new line",7,{"i":[{"n":"coord"},{"n":"coord"},{"n":"u8"}],"o":{"n":"self"}}],[11,"fmt","","",8,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"next","","",8,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"translate","","Translate the line from its current position to a new position by (x, y) pixels, returning a new `Line`.",7,{"i":[{"n":"self"},{"n":"coord"}],"o":{"n":"self"}}],[0,"rect","embedded_graphics::primitives","The rectangle primitive. Also good for drawing squares.",null,null],[3,"Rect","embedded_graphics::primitives::rect","Rectangle primitive",null,null],[12,"top_left","","Top left point of the rect",9,null],[12,"bottom_right","","Bottom right point of the rect",9,null],[12,"color","","Border color",9,null],[3,"RectIterator","","Pixel iterator for each pixel in the rect border",null,null],[11,"fmt","","",9,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",9,{"i":[{"n":"self"}],"o":{"n":"rect"}}],[11,"new","","Create a new rectangle from the top left point to the bottom right point with a given border color",9,{"i":[{"n":"coord"},{"n":"coord"},{"n":"u8"}],"o":{"n":"self"}}],[11,"fmt","","",10,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"clone","","",10,{"i":[{"n":"self"}],"o":{"n":"rectiterator"}}],[11,"next","","",10,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"translate","","Translate the rect from its current position to a new position by (x, y) pixels, returning a new `Rect`.",9,{"i":[{"n":"self"},{"n":"coord"}],"o":{"n":"self"}}],[0,"transform","embedded_graphics","Transformations for graphics objects",null,null],[8,"Transform","embedded_graphics::transform","Transform operations",null,null],[10,"translate","","Move the origin of an object by a given number of (x, y) pixels",11,{"i":[{"n":"self"},{"n":"coord"}],"o":{"n":"self"}}],[8,"Drawing","embedded_graphics","The main trait of this crate. All graphics objects must implement it.",null,null],[10,"draw","","Draw an object from an iterator over its pixels",12,{"i":[{"n":"self"},{"n":"t"}]}]],"paths":[[3,"Font6x8"],[8,"Font"],[3,"Image1BPP"],[3,"Image8BPP"],[8,"Image"],[3,"Circle"],[3,"CircleIterator"],[3,"Line"],[3,"LineIterator"],[3,"Rect"],[3,"RectIterator"],[8,"Transform"],[8,"Drawing"]]};
searchIndex["embedded_hal"] = {"doc":"A Hardware Abstraction Layer (HAL) for embedded systems","items":[[0,"blocking","embedded_hal","Blocking API",null,null],[0,"delay","embedded_hal::blocking","Delays",null,null],[8,"DelayMs","embedded_hal::blocking::delay","Millisecond delay",null,null],[10,"delay_ms","","Pauses execution for `ms` milliseconds",0,null],[8,"DelayUs","","Microsecond delay",null,null],[10,"delay_us","","Pauses execution for `us` microseconds",1,null],[0,"i2c","embedded_hal::blocking","Blocking I2C API",null,null],[8,"Read","embedded_hal::blocking::i2c","Blocking read",null,null],[16,"Error","","Error type",2,null],[10,"read","","Reads enough bytes from slave with `address` to fill `buffer`",2,null],[8,"Write","","Blocking write",null,null],[16,"Error","","Error type",3,null],[10,"write","","Sends bytes to slave with address `addr`",3,null],[8,"WriteRead","","Blocking write + read",null,null],[16,"Error","","Error type",4,null],[10,"write_read","","Sends bytes to slave with address `addr` and then reads enough bytes to fill `buffer` in a single transaction",4,null],[0,"serial","embedded_hal::blocking","Blocking serial API",null,null],[8,"Write","embedded_hal::blocking::serial","Write half of a serial interface (blocking variant)",null,null],[16,"Error","","The type of error that can occur when writing",5,null],[10,"bwrite_all","","Writes a slice, blocking until everything has been written",5,null],[10,"bflush","","Block until the serial interface has sent all buffered words",5,{"i":[{"n":"self"}],"o":{"n":"result"}}],[0,"write","","Blocking serial write",null,null],[8,"Default","embedded_hal::blocking::serial::write","Marker trait to opt into default blocking write implementation",null,null],[0,"spi","embedded_hal::blocking","Blocking SPI API",null,null],[8,"Transfer","embedded_hal::blocking::spi","Blocking transfer",null,null],[16,"Error","","Error type",6,null],[10,"transfer","","Sends `words` to the slave. Returns the `words` received from the slave",6,null],[8,"Write","","Blocking write",null,null],[16,"Error","","Error type",7,null],[10,"write","","Sends `words` to the slave, ignoring all the incoming words",7,null],[0,"transfer","","Blocking transfer",null,null],[8,"Default","embedded_hal::blocking::spi::transfer","Default implementation of `blocking::spi::Transfer<W>` for implementers of `spi::FullDuplex<W>`",null,null],[0,"write","embedded_hal::blocking::spi","Blocking write",null,null],[8,"Default","embedded_hal::blocking::spi::write","Default implementation of `blocking::spi::Write<W>` for implementers of `spi::FullDuplex<W>`",null,null],[0,"rng","embedded_hal::blocking","Blocking hardware random number generator",null,null],[8,"Read","embedded_hal::blocking::rng","Blocking read",null,null],[16,"Error","","Error type",8,null],[10,"read","","Reads enough bytes from hardware random number generator to fill `buffer`",8,null],[0,"serial","embedded_hal","Serial interface",null,null],[8,"Read","embedded_hal::serial","Read half of a serial interface",null,null],[16,"Error","","Read error",9,null],[10,"read","","Reads a single word from the serial interface",9,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[8,"Write","","Write half of a serial interface",null,null],[16,"Error","","Write error",10,null],[10,"write","","Writes a single word to the serial interface",10,{"i":[{"n":"self"},{"n":"word"}],"o":{"g":["error"],"n":"result"}}],[10,"flush","","Ensures that none of the previously written words are still buffered",10,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[0,"spi","embedded_hal","Serial Peripheral Interface",null,null],[8,"FullDuplex","embedded_hal::spi","Full duplex (master mode)",null,null],[16,"Error","","An enumeration of SPI errors",11,null],[10,"read","","Reads the word stored in the shift register",11,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[10,"send","","Sends a word to the slave",11,{"i":[{"n":"self"},{"n":"word"}],"o":{"g":["error"],"n":"result"}}],[4,"Polarity","","Clock polarity",null,null],[13,"IdleLow","","Clock signal low when idle",12,null],[13,"IdleHigh","","Clock signal high when idle",12,null],[4,"Phase","","Clock phase",null,null],[13,"CaptureOnFirstTransition","","Data in \"captured\" on the first clock transition",13,null],[13,"CaptureOnSecondTransition","","Data in \"captured\" on the second clock transition",13,null],[3,"Mode","","SPI mode",null,null],[12,"polarity","","Clock polarity",14,null],[12,"phase","","Clock phase",14,null],[8,"PwmPin","embedded_hal","A single PWM channel / pin",null,null],[16,"Duty","","Type for the `duty` methods",15,null],[10,"disable","","Disables a PWM `channel`",15,null],[10,"enable","","Enables a PWM `channel`",15,null],[10,"get_duty","","Returns the current duty cycle",15,null],[10,"get_max_duty","","Returns the maximum duty cycle value",15,null],[10,"set_duty","","Sets a new duty cycle",15,null],[8,"Capture","","Input capture",null,null],[16,"Error","","Enumeration of `Capture` errors",16,null],[16,"Channel","","Enumeration of channels that can be used with this `Capture` interface",16,null],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",16,null],[16,"Capture","","The type of the value returned by `capture`",16,null],[10,"capture","","\"Waits\" for a transition in the capture `channel` and returns the value of counter at that instant",16,null],[10,"disable","","Disables a capture `channel`",16,null],[10,"enable","","Enables a capture `channel`",16,null],[10,"get_resolution","","Returns the current resolution",16,null],[10,"set_resolution","","Sets the resolution of the capture timer",16,null],[4,"Direction","","Count direction",null,null],[13,"Downcounting","","3, 2, 1",17,null],[13,"Upcounting","","1, 2, 3",17,null],[8,"Pwm","","Pulse Width Modulation",null,null],[16,"Channel","","Enumeration of channels that can be used with this `Pwm` interface",18,null],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",18,null],[16,"Duty","","Type for the `duty` methods",18,null],[10,"disable","","Disables a PWM `channel`",18,null],[10,"enable","","Enables a PWM `channel`",18,null],[10,"get_period","","Returns the current PWM period",18,null],[10,"get_duty","","Returns the current duty cycle",18,null],[10,"get_max_duty","","Returns the maximum duty cycle value",18,null],[10,"set_duty","","Sets a new duty cycle",18,null],[10,"set_period","","Sets a new PWM period",18,null],[8,"Qei","","Quadrature encoder interface",null,null],[16,"Count","","The type of the value returned by `count`",19,null],[10,"count","","Returns the current pulse count of the encoder",19,null],[10,"direction","","Returns the count direction",19,{"i":[{"n":"self"}],"o":{"n":"direction"}}],[0,"digital","","Digital I/O",null,null],[8,"InputPin","embedded_hal::digital","Single digital input pin",null,null],[10,"is_high","","Is the input pin high?",20,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[10,"is_low","","Is the input pin low?",20,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[8,"OutputPin","","Single digital output pin",null,null],[10,"is_high","","Is the output pin high?",21,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[10,"is_low","","Is the output pin low?",21,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[10,"set_low","","Sets the pin low",21,{"i":[{"n":"self"}]}],[10,"set_high","","Sets the pin high",21,{"i":[{"n":"self"}]}],[0,"prelude","embedded_hal","The prelude is a collection of all the traits in this crate",null,null],[8,"_embedded_hal_Capture","embedded_hal::prelude","Input capture",null,null],[16,"Error","","Enumeration of `Capture` errors",16,null],[16,"Channel","","Enumeration of channels that can be used with this `Capture` interface",16,null],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",16,null],[16,"Capture","","The type of the value returned by `capture`",16,null],[10,"capture","","\"Waits\" for a transition in the capture `channel` and returns the value of counter at that instant",16,null],[10,"disable","","Disables a capture `channel`",16,null],[10,"enable","","Enables a capture `channel`",16,null],[10,"get_resolution","","Returns the current resolution",16,null],[10,"set_resolution","","Sets the resolution of the capture timer",16,null],[8,"_embedded_hal_Pwm","","Pulse Width Modulation",null,null],[16,"Channel","","Enumeration of channels that can be used with this `Pwm` interface",18,null],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",18,null],[16,"Duty","","Type for the `duty` methods",18,null],[10,"disable","","Disables a PWM `channel`",18,null],[10,"enable","","Enables a PWM `channel`",18,null],[10,"get_period","","Returns the current PWM period",18,null],[10,"get_duty","","Returns the current duty cycle",18,null],[10,"get_max_duty","","Returns the maximum duty cycle value",18,null],[10,"set_duty","","Sets a new duty cycle",18,null],[10,"set_period","","Sets a new PWM period",18,null],[8,"_embedded_hal_PwmPin","","A single PWM channel / pin",null,null],[16,"Duty","","Type for the `duty` methods",15,null],[10,"disable","","Disables a PWM `channel`",15,null],[10,"enable","","Enables a PWM `channel`",15,null],[10,"get_duty","","Returns the current duty cycle",15,null],[10,"get_max_duty","","Returns the maximum duty cycle value",15,null],[10,"set_duty","","Sets a new duty cycle",15,null],[8,"_embedded_hal_Qei","","Quadrature encoder interface",null,null],[16,"Count","","The type of the value returned by `count`",19,null],[10,"count","","Returns the current pulse count of the encoder",19,null],[10,"direction","","Returns the count direction",19,{"i":[{"n":"self"}],"o":{"n":"direction"}}],[8,"_embedded_hal_blocking_delay_DelayMs","","Millisecond delay",null,null],[10,"delay_ms","","Pauses execution for `ms` milliseconds",0,null],[8,"_embedded_hal_blocking_delay_DelayUs","","Microsecond delay",null,null],[10,"delay_us","","Pauses execution for `us` microseconds",1,null],[8,"_embedded_hal_blocking_i2c_Read","","Blocking read",null,null],[16,"Error","","Error type",2,null],[10,"read","","Reads enough bytes from slave with `address` to fill `buffer`",2,null],[8,"_embedded_hal_blocking_i2c_Write","","Blocking write",null,null],[16,"Error","","Error type",3,null],[10,"write","","Sends bytes to slave with address `addr`",3,null],[8,"_embedded_hal_blocking_i2c_WriteRead","","Blocking write + read",null,null],[16,"Error","","Error type",4,null],[10,"write_read","","Sends bytes to slave with address `addr` and then reads enough bytes to fill `buffer` in a single transaction",4,null],[8,"_embedded_hal_blocking_serial_Write","","Write half of a serial interface (blocking variant)",null,null],[16,"Error","","The type of error that can occur when writing",5,null],[10,"bwrite_all","","Writes a slice, blocking until everything has been written",5,null],[10,"bflush","","Block until the serial interface has sent all buffered words",5,{"i":[{"n":"self"}],"o":{"n":"result"}}],[8,"_embedded_hal_blocking_spi_Transfer","","Blocking transfer",null,null],[16,"Error","","Error type",6,null],[10,"transfer","","Sends `words` to the slave. Returns the `words` received from the slave",6,null],[8,"_embedded_hal_blocking_spi_Write","","Blocking write",null,null],[16,"Error","","Error type",7,null],[10,"write","","Sends `words` to the slave, ignoring all the incoming words",7,null],[8,"_embedded_hal_digital_InputPin","","Single digital input pin",null,null],[10,"is_high","","Is the input pin high?",20,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[10,"is_low","","Is the input pin low?",20,{"i":[{"n":"self"}],"o":{"n":"bool"}}],[8,"_embedded_hal_serial_Read","","Read half of a serial interface",null,null],[16,"Error","","Read error",9,null],[10,"read","","Reads a single word from the serial interface",9,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[8,"_embedded_hal_serial_Write","","Write half of a serial interface",null,null],[16,"Error","","Write error",10,null],[10,"write","","Writes a single word to the serial interface",10,{"i":[{"n":"self"},{"n":"word"}],"o":{"g":["error"],"n":"result"}}],[10,"flush","","Ensures that none of the previously written words are still buffered",10,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[8,"_embedded_hal_spi_FullDuplex","","Full duplex (master mode)",null,null],[16,"Error","","An enumeration of SPI errors",11,null],[10,"read","","Reads the word stored in the shift register",11,{"i":[{"n":"self"}],"o":{"g":["error"],"n":"result"}}],[10,"send","","Sends a word to the slave",11,{"i":[{"n":"self"},{"n":"word"}],"o":{"g":["error"],"n":"result"}}],[0,"timer","embedded_hal","Timers",null,null],[8,"Periodic","embedded_hal::timer","Marker trait that indicates that a timer is periodic",null,null],[8,"CountDown","","A count down timer",null,null],[16,"Time","","The unit of time used by this timer",22,null],[10,"start","","Starts a new count down",22,{"i":[{"n":"self"},{"n":"t"}]}],[10,"wait","","Non-blockingly \"waits\" until the count down finishes",22,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"eq","embedded_hal::spi","",13,{"i":[{"n":"self"},{"n":"phase"}],"o":{"n":"bool"}}],[11,"eq","embedded_hal","",17,{"i":[{"n":"self"},{"n":"direction"}],"o":{"n":"bool"}}],[11,"eq","embedded_hal::spi","",14,{"i":[{"n":"self"},{"n":"mode"}],"o":{"n":"bool"}}],[11,"ne","","",14,{"i":[{"n":"self"},{"n":"mode"}],"o":{"n":"bool"}}],[11,"eq","","",12,{"i":[{"n":"self"},{"n":"polarity"}],"o":{"n":"bool"}}],[11,"fmt","embedded_hal","",17,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"g":["error"],"n":"result"}}],[11,"clone","embedded_hal::spi","",14,{"i":[{"n":"self"}],"o":{"n":"mode"}}],[11,"clone","","",13,{"i":[{"n":"self"}],"o":{"n":"phase"}}],[11,"clone","","",12,{"i":[{"n":"self"}],"o":{"n":"polarity"}}],[11,"clone","embedded_hal","",17,{"i":[{"n":"self"}],"o":{"n":"direction"}}]],"paths":[[8,"_embedded_hal_blocking_delay_DelayMs"],[8,"_embedded_hal_blocking_delay_DelayUs"],[8,"_embedded_hal_blocking_i2c_Read"],[8,"_embedded_hal_blocking_i2c_Write"],[8,"_embedded_hal_blocking_i2c_WriteRead"],[8,"_embedded_hal_blocking_serial_Write"],[8,"_embedded_hal_blocking_spi_Transfer"],[8,"_embedded_hal_blocking_spi_Write"],[8,"Read"],[8,"_embedded_hal_serial_Read"],[8,"_embedded_hal_serial_Write"],[8,"_embedded_hal_spi_FullDuplex"],[4,"Polarity"],[4,"Phase"],[3,"Mode"],[8,"_embedded_hal_PwmPin"],[8,"_embedded_hal_Capture"],[4,"Direction"],[8,"_embedded_hal_Pwm"],[8,"_embedded_hal_Qei"],[8,"_embedded_hal_digital_InputPin"],[8,"OutputPin"],[8,"CountDown"]]};
searchIndex["nb"] = {"doc":"Minimal and reusable non-blocking I/O layer","items":[[4,"Error","nb","A non-blocking error",null,null],[13,"Other","","A different kind of error",0,null],[13,"WouldBlock","","This operation requires blocking behavior to complete",0,null],[6,"Result","","A non-blocking result",null,null],[11,"clone","","",0,{"i":[{"n":"self"}],"o":{"n":"error"}}],[11,"eq","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"n":"bool"}}],[11,"ne","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"n":"bool"}}],[11,"partial_cmp","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"g":["ordering"],"n":"option"}}],[11,"lt","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"n":"bool"}}],[11,"le","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"n":"bool"}}],[11,"gt","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"n":"bool"}}],[11,"ge","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"n":"bool"}}],[11,"cmp","","",0,{"i":[{"n":"self"},{"n":"error"}],"o":{"n":"ordering"}}],[11,"hash","","",0,null],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[14,"await","","Await operation (won't work until the language gains support for generators)",null,null],[14,"block","","Turns the non-blocking expression `$e` into a blocking operation.",null,null],[14,"try_nb","","Future adapter",null,null]],"paths":[[4,"Error"]]};
searchIndex["ssd1306"] = {"doc":"SSD1306 OLED display driver","items":[[0,"builder","ssd1306","Interface factory",null,null],[3,"Builder","ssd1306::builder","Builder struct. Driver options and interface are set using its methods.",null,null],[11,"clone","","",0,{"i":[{"n":"self"}],"o":{"n":"builder"}}],[11,"default","","",0,{"o":{"n":"self"}}],[11,"new","","Create new builder with a default size of 128 x 64 pixels and no rotation.",0,{"o":{"n":"self"}}],[11,"with_size","","Set the size of the display. Supported sizes are defined by [DisplaySize].",0,{"i":[{"n":"self"},{"n":"displaysize"}],"o":{"n":"self"}}],[11,"with_i2c_addr","","Set the I2C address to use. Defaults to 0x3C which is the most common address. The other address specified in the datasheet is 0x3D. Ignored when using SPI interface.",0,{"i":[{"n":"self"},{"n":"u8"}],"o":{"n":"self"}}],[11,"with_rotation","","Set the rotation of the display to one of four values. Defaults to no rotation. Note that 90º and 270º rotations are not supported by `TerminalMode`.",0,{"i":[{"n":"self"},{"n":"displayrotation"}],"o":{"n":"self"}}],[11,"connect_i2c","","Finish the builder and use I2C to communicate with the display",0,{"i":[{"n":"self"},{"n":"i2c"}],"o":{"g":["rawmode"],"n":"displaymode"}}],[11,"connect_spi","","Finish the builder and use SPI to communicate with the display",0,{"i":[{"n":"self"},{"n":"spi"},{"n":"dc"}],"o":{"g":["rawmode"],"n":"displaymode"}}],[0,"displayrotation","ssd1306","Display rotation",null,null],[4,"DisplayRotation","ssd1306::displayrotation","Display rotation.",null,null],[13,"Rotate0","","No rotation, normal display",1,null],[13,"Rotate90","","Rotate by 90 degress clockwise",1,null],[13,"Rotate180","","Rotate by 180 degress clockwise",1,null],[13,"Rotate270","","Rotate 270 degress clockwise",1,null],[11,"clone","","",1,{"i":[{"n":"self"}],"o":{"n":"displayrotation"}}],[0,"interface","ssd1306","SSD1306 Communication Interface (I2C/SPI)",null,null],[0,"i2c","ssd1306::interface","SSD1306 I2C Interface",null,null],[3,"I2cInterface","ssd1306::interface::i2c","SSD1306 I2C communication interface",null,null],[11,"new","","Create new SSD1306 I2C interface",2,{"i":[{"n":"i2c"},{"n":"u8"}],"o":{"n":"self"}}],[11,"send_commands","","",2,null],[11,"send_data","","",2,null],[0,"spi","ssd1306::interface","SSD1306 SPI interface",null,null],[3,"SpiInterface","ssd1306::interface::spi","SPI display interface.",null,null],[11,"new","","Create new SPI interface for communciation with SSD1306",3,{"i":[{"n":"spi"},{"n":"dc"}],"o":{"n":"self"}}],[11,"send_commands","","",3,null],[11,"send_data","","",3,null],[8,"DisplayInterface","ssd1306::interface","A method of communicating with SSD1306",null,null],[10,"send_commands","","Send a batch of up to 8 commands to display.",4,null],[10,"send_data","","Send data to display.",4,null],[0,"mode","ssd1306","Operating modes for the SSD1306",null,null],[0,"displaymode","ssd1306::mode","Abstraction of different operating modes for the SSD1306",null,null],[3,"DisplayMode","ssd1306::mode::displaymode","Display mode abstraction",null,null],[12,"0","","",5,null],[8,"DisplayModeTrait","","Trait with core functionality for display mode switching",null,null],[10,"new","","Allocate all required data and initialise display for mode",6,{"i":[{"n":"displayproperties"}],"o":{"n":"self"}}],[10,"release","","Release resources for reuse with different mode",6,{"i":[{"n":"self"}],"o":{"n":"displayproperties"}}],[11,"new","","Setup display to run in requested mode",5,{"i":[{"n":"displayproperties"}],"o":{"n":"self"}}],[11,"into","","Change into any mode implementing DisplayModeTrait",5,{"i":[{"n":"self"}],"o":{"n":"nmode"}}],[0,"graphics","ssd1306::mode","Buffered display module for use with the [embedded_graphics] crate",null,null],[3,"GraphicsMode","ssd1306::mode::graphics","Graphics mode handler",null,null],[11,"new","","Create new GraphicsMode instance",7,{"i":[{"n":"displayproperties"}],"o":{"n":"self"}}],[11,"release","","Release all resources used by GraphicsMode",7,{"i":[{"n":"self"}],"o":{"n":"displayproperties"}}],[11,"clear","","Clear the display buffer. You need to call `disp.flush()` for any effect on the screen",7,{"i":[{"n":"self"}]}],[11,"reset","","Reset display",7,{"i":[{"n":"self"},{"n":"rst"},{"n":"delay"}]}],[11,"flush","","Write out data to display",7,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"set_pixel","","Turn a pixel on or off. A non-zero `value` is treated as on, `0` as off. If the X and Y coordinates are out of the bounds of the display, this method call is a noop.",7,{"i":[{"n":"self"},{"n":"u32"},{"n":"u32"},{"n":"u8"}]}],[11,"init","","Display is set up in column mode, i.e. a byte walks down a column of 8 pixels from column 0 on the left, to column n on the right",7,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"get_dimensions","","Get display dimensions, taking into account the current rotation of the display",7,null],[11,"set_rotation","","Set the display rotation",7,{"i":[{"n":"self"},{"n":"displayrotation"}],"o":{"n":"result"}}],[11,"draw","","",7,{"i":[{"n":"self"},{"n":"t"}]}],[0,"raw","ssd1306::mode","Raw mode for coercion into richer driver types",null,null],[3,"RawMode","ssd1306::mode::raw","Raw display mode",null,null],[11,"new","","Create new RawMode instance",8,{"i":[{"n":"displayproperties"}],"o":{"n":"self"}}],[11,"release","","Release all resources used by RawMode",8,{"i":[{"n":"self"}],"o":{"n":"displayproperties"}}],[11,"new","","Create a new raw display mode",8,{"i":[{"n":"displayproperties"}],"o":{"n":"self"}}],[0,"terminal","ssd1306::mode","Unbuffered terminal display mode",null,null],[3,"TerminalMode","ssd1306::mode::terminal","Terminal mode handler",null,null],[8,"CharacterBitmap","","A trait to convert from a character to 8x8 bitmap",null,null],[10,"to_bitmap","","Turn input of type T into a displayable 8x8 bitmap",9,null],[11,"to_bitmap","","",10,null],[11,"new","","Create new TerminalMode instance",10,{"i":[{"n":"displayproperties"}],"o":{"n":"self"}}],[11,"release","","Release all resources used by TerminalMode",10,{"i":[{"n":"self"}],"o":{"n":"displayproperties"}}],[11,"clear","","Clear the display",10,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"reset","","Reset display",10,{"i":[{"n":"self"},{"n":"rst"},{"n":"delay"}]}],[11,"flush","","Write out data to display. This is a noop in terminal mode.",10,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"print_char","","Print a character to the display",10,{"i":[{"n":"self"},{"n":"t"}],"o":{"n":"result"}}],[11,"init","","Initialise the display in column mode (i.e. a byte walks down a column of 8 pixels) with column 0 on the left and column (display_width - 1) on the right.",10,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"set_rotation","","Set the display rotation",10,{"i":[{"n":"self"},{"n":"displayrotation"}],"o":{"n":"result"}}],[11,"write_str","","",10,{"i":[{"n":"self"},{"n":"str"}],"o":{"g":["error"],"n":"result"}}],[0,"prelude","ssd1306","Crate prelude",null,null],[4,"DisplaySize","ssd1306::prelude","Display size enumeration",null,null],[13,"Display128x64","","128 by 64 pixels",11,null],[13,"Display128x32","","128 by 32 pixels",11,null],[13,"Display96x16","","96 by 16 pixels",11,null],[0,"properties","ssd1306","Container to store and set display properties",null,null],[3,"DisplayProperties","ssd1306::properties","Display properties struct",null,null],[11,"new","","Create new DisplayProperties instance",12,{"i":[{"n":"di"},{"n":"displaysize"},{"n":"displayrotation"}],"o":{"n":"displayproperties"}}],[11,"init_column_mode","","Initialise the display in column mode (i.e. a byte walks down a column of 8 pixels) with column 0 on the left and column (display_width - 1) on the right.",12,{"i":[{"n":"self"}],"o":{"n":"result"}}],[11,"set_draw_area","","Set the position in the framebuffer of the display where any sent data should be drawn. This method can be used for changing the affected area on the screen as well as (re-)setting the start point of the next `draw` call.",12,null],[11,"draw","","Send the data to the display for drawing at the current position in the framebuffer and advance the position accordingly. Cf. `set_draw_area` to modify the affected area by this method.",12,null],[11,"get_size","","Get the configured display size",12,{"i":[{"n":"self"}],"o":{"n":"displaysize"}}],[11,"get_dimensions","","Get display dimensions, taking into account the current rotation of the display",12,null],[11,"get_rotation","","Get the display rotation",12,{"i":[{"n":"self"}],"o":{"n":"displayrotation"}}],[11,"set_rotation","","Set the display rotation",12,{"i":[{"n":"self"},{"n":"displayrotation"}],"o":{"n":"result"}}],[11,"clone","ssd1306::prelude","",11,{"i":[{"n":"self"}],"o":{"n":"displaysize"}}],[11,"dimensions","","Get integral dimensions from DisplaySize",11,null]],"paths":[[3,"Builder"],[4,"DisplayRotation"],[3,"I2cInterface"],[3,"SpiInterface"],[8,"DisplayInterface"],[3,"DisplayMode"],[8,"DisplayModeTrait"],[3,"GraphicsMode"],[3,"RawMode"],[8,"CharacterBitmap"],[3,"TerminalMode"],[4,"DisplaySize"],[3,"DisplayProperties"]]};
searchIndex["void"] = {"doc":"Void","items":[[4,"Void","void","The empty type for cases which can't occur.",null,null],[5,"unreachable","","A safe version of `intrinsincs::unreachable`.",null,null],[8,"ResultVoidExt","","Extensions to `Result<T, Void>`",null,null],[10,"void_unwrap","","Get the value out of a wrapper.",0,{"i":[{"n":"self"}],"o":{"n":"t"}}],[8,"ResultVoidErrExt","","Extensions to `Result<Void, E>`",null,null],[10,"void_unwrap_err","","Get the error out of a wrapper.",1,{"i":[{"n":"self"}],"o":{"n":"e"}}],[11,"clone","","",2,{"i":[{"n":"self"}],"o":{"n":"void"}}],[11,"fmt","","",2,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"fmt","","",2,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"eq","","",2,{"i":[{"n":"self"},{"n":"t"}],"o":{"n":"bool"}}],[11,"partial_cmp","","",2,{"i":[{"n":"self"},{"n":"t"}],"o":{"g":["ordering"],"n":"option"}}]],"paths":[[8,"ResultVoidExt"],[8,"ResultVoidErrExt"],[4,"Void"]]};
initSearch(searchIndex);
